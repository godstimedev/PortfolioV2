'use client';
import { Award, BriefcaseBusiness, Contact2, Home, MessageCircle, ToolCase } from 'lucide-react';
import NavLink from '../NavLink';
import { ModeToggle } from '../ToggleMode';

type PropTypes = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
};

const MobileSidebar = (props: PropTypes) => {
	const { setIsOpen } = props;

	const handleNavClick = () => {
		setIsOpen(false);
	};

	return (
		<aside className="w-full h-full bg-background px-6 py-8 overflow-y-auto">
			<div className="flex flex-col gap-4">
				<ul className="flex flex-col gap-2">
					{navItems.slice(0, 4).map((item, index) => (
						<div key={index} onClick={handleNavClick}>
							<NavLink link={item.link}>
								{item.icon} {item.name}
							</NavLink>
						</div>
					))}
				</ul>

				<hr className="bg-accent my-4" />

				<ul className="flex flex-col gap-2">
					{navItems.slice(4, 7).map((item, index) => (
						<div key={index} onClick={handleNavClick}>
							<NavLink link={item.link}>
								{item.icon} {item.name}
							</NavLink>
						</div>
					))}
				</ul>

				<hr className="bg-accent my-4" />

				<ModeToggle />
			</div>
		</aside>
	);
};

export default MobileSidebar;

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
