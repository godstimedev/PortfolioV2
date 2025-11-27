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
			prefetch={true}
			className={`text-lg flex items-center gap-2 p-3 rounded-lg transition-all duration-300 ${
				isActive
					? 'bg-primary text-primary-foreground shadow-md scale-105'
					: 'text-foreground hover:bg-accent hover:scale-105 hover:shadow-sm'
			}`}
		>
			{children}
		</Link>
	);
};

export default NavLink;
