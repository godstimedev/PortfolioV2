'use client';
import { Gt } from '@/assets/images';
import { Award, BriefcaseBusiness, Contact2, Home, MessageCircle, ToolCase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from '../NavLink';
import { ModeToggle } from '../ToggleMode';
import { useEffect, useState } from 'react';

const navItems = [
	{
		name: 'Home',
		icon: <Home />,
		link: '/',
	},
	{
		name: 'Resume',
		icon: <Award />,
		link: '/resume',
	},
	{
		name: 'Projects',
		icon: <BriefcaseBusiness />,
		link: '/projects',
	},
	{
		name: 'Tools',
		icon: <ToolCase />,
		link: '/tools',
	},
	{
		name: 'Socials',
		icon: <MessageCircle />,
		link: '/socials',
	},
	{
		name: 'Contact',
		icon: <Contact2 />,
		link: '/contact',
	},
];

const Sidebar = () => {
	const [currentTitle, setCurrentTitle] = useState(0);
	const titles = ['Software', 'Frontend'];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTitle((prev) => (prev + 1) % titles.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<aside className="w-[300px] h-screen border border-accent px-4 py-8 shrink-0 bg-background overflow-y-auto">
			<div className="h-full flex flex-col gap-6">
				<Link href="/">
					<div className="flex items-center gap-4 cursor-pointer hover:opacity-95 transition-opacity">
						<Image
							src={Gt}
							alt="Godstime Agholor"
							className="w-16 h-16 rounded-xl object-cover"
							priority
						/>

						<div className="flex flex-col">
							<h2 className="font-semibold text-lg">Godstime Agholor</h2>
							<div className="h-6 relative">
								{titles.map((title, index) => (
									<h6
										key={index}
										className={`text-sm text-primary font-semibold h-6 flex items-center absolute inset-0 transition-opacity duration-500 ${
											currentTitle === index ? 'opacity-100' : 'opacity-0'
										}`}
									>
										{title} Engineer
									</h6>
								))}
							</div>
						</div>
					</div>
				</Link>

				<hr className="bg-accent" />

				<ul className="flex flex-col gap-2">
					{navItems.slice(0, 4).map((item, index) => (
						<NavLink link={item.link} key={index}>
							{item.icon} {item.name}
						</NavLink>
					))}
				</ul>

				<hr className="bg-accent my-4" />

				<ul className="flex flex-col gap-2">
					{navItems.slice(4, 7).map((item, index) => (
						<NavLink link={item.link} key={index}>
							{item.icon} {item.name}
						</NavLink>
					))}
				</ul>

				<div className="mt-auto mb-4">
					<ModeToggle />
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
