'use client';
import { Gt } from '@/assets/images';
import { Award, BriefcaseBusiness, Contact2, Home, MessageCircle, ToolCase } from 'lucide-react';
import Image from 'next/image';
import NavLink from '../NavLink';

const Sidebar = () => {
	return (
		<aside className="w-[320px] h-screen max-sm:hidden border border-accent p-4">
			<div className="h-full flex flex-col gap-6 ">
				<div className="flex items-center gap-4">
					<Image src={Gt} alt="Godstime Agholor" className="w-16 h-16 rounded-xl object-cover" />

					<div className="flex flex-col ">
						<h2 className="font-bold text-xl">Godstime Agholor</h2>
						<h6 className="text-sm text-gray-300">Software Engineer</h6>
					</div>
				</div>

				<hr className="bg-accent" />

				<ul className="flex flex-col gap-2">
					{navItems.slice(0, 4).map((item, index) => (
						<NavLink link={item.link} key={index}>
							{item.icon} {item.name}
						</NavLink>
					))}
				</ul>

				<ul className="flex flex-col gap-2 mt-auto mb-10">
					<hr className="bg-accent my-8" />
					{navItems.slice(4, 7).map((item, index) => (
						<NavLink link={item.link} key={index}>
							{item.icon} {item.name}
						</NavLink>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;

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
