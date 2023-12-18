FROM node:20-alpine AS base

# Instalar dependencias solo cuando sea necesario
FROM base AS deps
# Consulta https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine para entender por qu� puede ser necesario libc6-compat.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalar dependencias seg�n el administrador de paquetes preferido
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Reconstruir el c�digo fuente solo cuando sea necesario
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js recopila datos de telemetr�a completamente an�nimos sobre el uso general.
# Obt�n m�s informaci�n aqu�: https://nextjs.org/telemetry
# Descomenta la siguiente l�nea en caso de que quieras desactivar la telemetr�a durante la construcci�n.
# ENV NEXT_TELEMETRY_DISABLED 1

# RUN yarn build

# Si usas npm, comenta lo anterior y utiliza lo siguiente en su lugar
RUN npm run build

# Imagen de producci�n, copiar todos los archivos y ejecutar next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Descomenta la siguiente l�nea en caso de que quieras desactivar la telemetr�a durante la ejecuci�n.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Establecer los permisos correctos para la cach� de prerrenderizaci�n
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Aprovechar autom�ticamente las trazas de salida para reducir el tama�o de la imagen
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# establecer el nombre de host en localhost
ENV HOSTNAME "0.0.0.0"

# server.js es creado por next build a partir de la salida independiente
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
