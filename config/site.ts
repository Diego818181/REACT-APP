export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Utpl-TEC",
	description: "Mapa de capacidades UTPL-TEC",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},
    {
      label: "Web Principal",
      href: "https://tec.utpl.edu.ec/tecnologias",
    },
    {
      label: "Matricula",
      href: "https://srv-si-001.utpl.edu.ec/INSCRIPCION_NUEVOS_MAD/",
    },
    {
      label: "Contacto",
      href: "https://tec.utpl.edu.ec/contactos",
    },
    {
      label: "Acerca de",
      href: "https://tec.utpl.edu.ec/quienessomos",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/Diego818181",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4"
	},
};
