import {
	Aangoo,
	Aangoo2,
	Aangoo3,
	Aangoo4,
	Aangoo5,
	Aangoo6,
	AdePortfolio,
	Boadman,
	Boadman2,
	Boadman3,
	Boadman4,
	Boadman5,
	Boonfu,
	Boonfu2,
	Boonfu3,
	Boonfu4,
	Boonfu5,
	Gt,
	Portfolio,
	PP,
	PP2,
	PP3,
	PP4,
} from '@/assets/images';

export const projectsData = [
	{
		name: 'Aangoo',
		description:
			'I led the frontend development of Aangoo, an AI-powered learning management system (LMS) and financial education platform. The platform featured personalized course recommendations, interactive financial tools, and a seamless user experience across desktop and mobile.',
		technologies: ['React', 'TypeScript', 'Tailwind', 'Styled Components', 'PWA'],
		thumbnail: Aangoo,
		images: [Aangoo, Aangoo5, Aangoo6, Aangoo2, Aangoo3, Aangoo4], // Replace with actual project images
		liveUrl: 'https://aangoo.com',
	},
	{
		name: 'Boadman',
		description:
			'I worked as the primary frontend engineer on Boadman, a gaming platform project. My role focused on building a responsive landing page and an interactive gaming interface, including complex UI components such as tournament brackets, while ensuring scalability and a seamless user experience.',
		technologies: ['React', 'TypeScript', 'Tailwind', 'Styled Components'],
		thumbnail: Boadman2,
		images: [Boadman2, Boadman, Boadman3, Boadman4, Boadman5], // Replace with actual project images
		liveUrl: 'https://boadman.com',
	},
	{
		name: 'Boonfu',
		description:
			'I led the frontend development of Boonfu, a large-scale online marketplace built to connect buyers, sellers, and local businesses across Nigeria. The platform supports diverse product categories such as vehicles, fashion, electronics, and everyday essentials, with a focus on scalability, performance, and user-friendly design.',
		technologies: ['React', 'TypeScript', 'Tailwind', 'React Query', 'Formik'],
		thumbnail: Boonfu,
		images: [Boonfu, Boonfu2, Boonfu3, Boonfu4, Boonfu5], // Replace with actual project images
		liveUrl: 'https://boonfu.site',
	},
	{
		name: 'Pattern & Produce Studios',
		description:
			'A Next.js website tailored for a garment production and manufacturing hub. This platform empowers users with an array of features, enabling them to book appointments, register for training programs, and explore a comprehensive range of services. It also contains an Admin Panel which is managed by an Admin to update website content.',
		technologies: ['Next.js', 'JavaScript', 'Tailwind', 'MongoDB', 'Express'],
		thumbnail: PP,
		images: [PP, PP2, PP3, PP4], // Replace with actual project images
		liveUrl: 'https://www.patternandproduce.com/',
	},
	{
		name: "Adewole's Portfolio",
		description:
			"A personalized portfolio for Adewole, it is a simple website that displays Adewole's design work and projects.",
		technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
		thumbnail: AdePortfolio,
		images: [AdePortfolio], // Replace with actual project images
		liveUrl: 'https://adewole-iota.vercel.app',
	},
	{
		name: "Godstime's Portfolio",
		description: 'My personal portfolio, it is a simple website that displays my work and projects.',
		technologies: ['Next.js', 'TypeScript', 'Tailwind'],
		thumbnail: Portfolio,
		images: [Portfolio], // Replace with actual project images
		liveUrl: 'https://godstime.vercel.app/',
	},
];
