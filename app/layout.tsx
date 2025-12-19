import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
	title: 'Godstime Agholor | Software Engineer',
	description:
		'Frontend & Software Engineer with 4+ years of experience building responsive, user-friendly digital products. Specializing in React, Next.js, and TypeScript.',
	keywords: [
		'Software Engineer',
		'Frontend Developer',
		'Frontend Engineer',
		'React',
		'Next.js',
		'TypeScript',
		'Web Developer',
		'Godstime Agholor',
		'Godstime',
		'GT',
	],
	manifest: '/manifest.json',
	icons: {
		icon: [
			{ url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
			{ url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
		],
		apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
	},
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		title: 'GT Portfolio',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="theme-color" content="#4ade80" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="GT Portfolio" />
			</head>
			<body suppressHydrationWarning>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<Analytics />
					<SpeedInsights />
					<AnimatedBackground />
					<Header />

					<div className="flex  w-full  h-screen">
						<div className="max-md:hidden">
							<Sidebar />
						</div>

						<main className="w-full h-full overflow-y-auto relative">
							<div className="max-w-[740px] mx-auto px-6 py-8 mt-28 md:mt-16">{children}</div>
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
