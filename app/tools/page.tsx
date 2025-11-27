'use client';
import React from 'react';
import ToolCard from '@/components/ToolCard';
import {
	ReactIcon,
	NextJsIcon,
	TypeScriptIcon,
	TailwindIcon,
	JavaScriptIcon,
	NodeJsIcon,
	GitIcon,
	FigmaIcon,
	PythonIcon,
	ReduxIcon,
	ExpressIcon,
	GraphQLIcon,
	MongoDBIcon,
	PostgreSQLIcon,
	DockerIcon,
	HTML5Icon,
	CSS3Icon,
	GitHubIcon,
	JestIcon,
	ShadcnIcon,
	AxiosIcon,
	FramerMotionIcon,
	StyledComponentsIcon,
	SupabaseIcon,
} from '@/assets/svgs';

const tools = [
	{
		name: 'HTML5',
		logo: <HTML5Icon />,
	},
	{
		name: 'CSS3',
		logo: <CSS3Icon />,
	},
	{
		name: 'JavaScript',
		logo: <JavaScriptIcon />,
	},
	{
		name: 'TypeScript',
		logo: <TypeScriptIcon />,
	},

	{
		name: 'React',
		logo: <ReactIcon />,
	},
	{
		name: 'Next.js',
		logo: <NextJsIcon />,
	},

	{
		name: 'Tailwind CSS',
		logo: <TailwindIcon />,
	},
	{
		name: 'Styled Components',
		logo: <StyledComponentsIcon />,
	},
	{
		name: 'ShadCN',
		logo: <ShadcnIcon />,
	},
	{
		name: 'Framer Motion',
		logo: <FramerMotionIcon />,
	},
	{
		name: 'Redux',
		logo: <ReduxIcon />,
	},
	{
		name: 'Node.js',
		logo: <NodeJsIcon />,
	},
	{
		name: 'Express.js',
		logo: <ExpressIcon />,
	},
	{
		name: 'GraphQL',
		logo: <GraphQLIcon />,
	},
	{
		name: 'Axios',
		logo: <AxiosIcon />,
	},
	{
		name: 'MongoDB',
		logo: <MongoDBIcon />,
	},
	{
		name: 'PostgreSQL',
		logo: <PostgreSQLIcon />,
	},
	{
		name: 'Supabase',
		logo: <SupabaseIcon />,
	},
	{
		name: 'Docker',
		logo: <DockerIcon />,
	},
	{
		name: 'Git',
		logo: <GitIcon />,
	},
	{
		name: 'GitHub',
		logo: <GitHubIcon />,
	},
	{
		name: 'Jest',
		logo: <JestIcon />,
	},
	{
		name: 'Python',
		logo: <PythonIcon />,
	},
	{
		name: 'Figma',
		logo: <FigmaIcon />,
	},
];

const Tools = () => {
	return (
		<section className="flex flex-col gap-8 animate-fade-in">
			<div>
				<h2 className="mb-2">Tools & Technologies</h2>
				<p className="text-muted-foreground">
					Here are some of the tools and technologies I work with regularly.
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{tools.map((tool, index) => (
					<ToolCard key={index} name={tool.name} logo={tool.logo} />
				))}
			</div>
		</section>
	);
};

export default Tools;
