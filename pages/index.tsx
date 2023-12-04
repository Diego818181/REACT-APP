import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Mapa de Capacidades&nbsp;</h1>
					<br />
					<h1 className={title()}>
						UTPL-TEC
					</h1>
					
				</div>
				<div className="grid grid-cols-4 md:grid-cols-4 gap-4">
				<Link href="/gestionAcademica">
					<Card isFooterBlurred radius="lg" className="border-none">
					  <Image
						alt="Woman listing to music"
						className="object-cover"
						height={200}
						src="/images/Academico.png"
						width={200}
					  />
					  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="justify-center text-white/80">Gesti&oacute;n Acad&eacute;mica</p>
						
					  </CardFooter>
					</Card>
				</Link>
				<Link href="/matricula">
					<Card isFooterBlurred radius="lg" className="border-none">
					  <Image
						alt="Woman listing to music"
						className="object-cover"
						height={200}
						src="/images/matricula.png"
						width={200}
					  />
					  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="justify-center text-white/80">Admisi&oacute;n y Matr&iacute;cula</p>
						
					  </CardFooter>
					</Card>
				</Link>
				<Link href="/plataformas">
					<Card isFooterBlurred radius="lg" className="border-none">
					  <Image
						alt="Woman listing to music"
						className="object-cover"
						height={200}
						src="/images/plataforma_educativa.jpg"
						width={200}
					  />
					  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="justify-center text-white/80">Plataformas Educativas</p>
						
					  </CardFooter>
					</Card>
				</Link>
				<Link href="/tecnologias">
					<Card isFooterBlurred radius="lg" className="border-none">
					  <Image
						alt="Woman listing to music"
						className="object-cover"
						height={200}
						src="/images/tecnologias.jpg"
						width={200}
					  />
					  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="justify-center text-white/80">Tecnolog&iacute;as de Aprendizaje</p>
						
					  </CardFooter>
					</Card>
				</Link>
				<Link href="/investigacion">
					<Card isFooterBlurred radius="lg" className="border-none">
					  <Image
						alt="Woman listing to music"
						className="object-cover"
						height={200}
						src="/images/investigacion.png"
						width={200}
					  />
					  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="justify-center text-white/80">Investigaci&oacute;n y Desarrollo</p>
						
					  </CardFooter>
					</Card>
				</Link>
				<Link href="/financiera">
					<Card isFooterBlurred radius="lg" className="border-none">
					  <Image
						alt="Woman listing to music"
						className="object-cover"
						height={200}
						src="/images/financiero.jpg"
						width={200}
					  />
					  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="justify-center text-white/80">Administraci&oacute;n Financiera</p>
						
					  </CardFooter>
					</Card>
				</Link>
				<Link href="/rrhh">
					<Card isFooterBlurred radius="lg" className="border-none">
					  <Image
						alt="Woman listing to music"
						className="object-cover"
						height={200}
						src="/images/rrhh.png"
						width={200}
					  />
					  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="justify-center text-white/80">Gesti&oacute;n de Recursos Humanos</p>
						
					  </CardFooter>
					</Card>
				</Link>
				<Link href="/comunidad">
					<Card isFooterBlurred radius="lg" className="border-none">
					  <Image
						alt="Woman listing to music"
						className="object-cover"
						height={200}
						src="/images/comunidad.png"
						width={200}
					  />
					  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="justify-center text-white/80">Relaciones con la Comunidad</p>
						
					  </CardFooter>
					</Card>
				</Link>
				</div>
				<div className="flex gap-3">
					<Link
						isExternal
						href={siteConfig.links.docs}
						className={buttonStyles({
							color: "primary",
							radius: "full",
							variant: "shadow",
						})}
					>
						Documentation
					</Link>
					<Link
						isExternal
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>

				<div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="bordered">
						<span>
							Get started by editing <Code color="primary">pages/index.tsx</Code>
						</span>
					</Snippet>
				</div>
			</section>
		</DefaultLayout>
	);
}
