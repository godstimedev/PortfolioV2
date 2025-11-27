'use client';

type PropTypes = {
	name: string;
	logo: React.ReactNode;
};

const ToolCard = (props: PropTypes) => {
	const { name, logo } = props;
	return (
		<div className="group relative flex flex-col items-center justify-center gap-4 p-6 border border-accent rounded-xl bg-card hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer animate-fade-in">
			<div className="text-6xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
				{logo}
			</div>
			<h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
				{name}
			</h3>
		</div>
	);
};

export default ToolCard;
