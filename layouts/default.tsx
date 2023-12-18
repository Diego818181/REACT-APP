import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<UserProvider>
				<main className="container mx-auto max-w-7xl px-6 flex-grow">
					{children}
				</main>
			</UserProvider>
			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://github.com/Diego818181"
					title="nextui.org homepage"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">Diego Sarmiento</p>
				</Link>
			</footer>
		</div>
	);
}
