import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Content-Security-Policy',
						value:
							"default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.emailjs.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.emailjs.com https://api.emailjs.com/api/v1.0/email/send;",
					},
				],
			},
		];
	},
};

export default nextConfig;
