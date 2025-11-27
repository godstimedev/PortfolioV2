'use client';
import { ExternalLink } from 'lucide-react';

type PropTypes = {
	name: string;
	icon: React.ReactNode;
	link: string;
	description?: string;
};

const SocialCard = (props: PropTypes) => {
	const { name, icon, link, description } = props;
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative flex items-center gap-4 p-6 border border-accent rounded-xl bg-card hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer animate-fade-in"
		>
			<div className="text-5xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
				{icon}
			</div>
			<div className="flex-1">
				<h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
					{name}
					<ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
				</h3>
				{description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
			</div>
			<div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
		</a>
	);
};

export default SocialCard;
