'use client';
import { Code2, Rocket, Sparkles, Target } from 'lucide-react';

const About = () => {
	const values = [
		{
			icon: <Code2 className="w-8 h-8 text-primary" />,
			title: 'Clean Code',
			description: 'Writing maintainable and scalable code is my priority.',
		},
		{
			icon: <Target className="w-8 h-8 text-primary" />,
			title: 'User-Focused',
			description: 'Creating experiences that users love and businesses need.',
		},
		{
			icon: <Rocket className="w-8 h-8 text-primary" />,
			title: 'Fast Delivery',
			description: 'Efficient workflows mean faster time to market.',
		},
		{
			icon: <Sparkles className="w-8 h-8 text-primary" />,
			title: 'Attention to Detail',
			description: 'Every pixel matters in creating beautiful interfaces.',
		},
	];

	return (
		<section className="flex flex-col gap-8 animate-fade-in">
			<div>
				<h2 className="mb-2">About Me</h2>
				<p className="text-muted-foreground">Learn more about my journey and values.</p>
			</div>

			<div className="flex flex-col gap-6">
				<div className="p-6 border border-accent rounded-xl bg-card space-y-4 animate-slide-in-left">
					<h3 className="text-2xl font-semibold">My Journey</h3>
					<p className="text-muted-foreground leading-relaxed">
						With over 4 years of experience in software development, I've had the privilege of working on
						diverse projects ranging from startups to enterprise applications. My journey began with a
						curiosity for how things work on the web, and it has evolved into a passion for creating
						seamless digital experiences.
					</p>
					<p className="text-muted-foreground leading-relaxed">
						I specialize in frontend development with React, Next.js, and TypeScript, but I'm always
						exploring new technologies and best practices. My goal is to bridge the gap between design and
						functionality, creating products that are both beautiful and performant.
					</p>
				</div>

				<div>
					<h3 className="text-2xl font-semibold mb-4">What I Value</h3>
					<div className="grid md:grid-cols-2 gap-4 animate-stagger">
						{values.map((value, index) => (
							<div
								key={index}
								className="p-6 border border-accent rounded-xl bg-card hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg"
							>
								<div className="mb-3">{value.icon}</div>
								<h4 className="text-lg font-semibold mb-2">{value.title}</h4>
								<p className="text-sm text-muted-foreground">{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
