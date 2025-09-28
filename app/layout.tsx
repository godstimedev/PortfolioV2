import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
	title: 'Godstime Agholor',
	description: 'Software Engineer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<div className="flex max-w-[1640px] w-full mx-auto">
						<Sidebar />

						<main className="w-full max-w-[960px] mx-auto p-4">{children}</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
