'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type PropTypes = {
	link: string;
	children: ReactNode;
};

const NavLink = (props: PropTypes) => {
	const { link, children } = props;

	const pathname = usePathname();
	const isActive = pathname === link;

	return (
		<Link
			href={link}
			className={`text-lg flex items-center gap-2 text-white p-2 rounded-md hover:bg-accent ${
				isActive ? 'text-primary bg-primary' : ''
			}`}
		>
			{children}
		</Link>
	);
};

export default NavLink;
