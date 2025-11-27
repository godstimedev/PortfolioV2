'use client';
import Project from '@/components/Project';
import { projectsData } from '@/constants/projects';

const Projects = () => {
	return (
		<section className="flex flex-col gap-6 animate-fade-in">
			<div>
				<h2 className="mb-2">My Projects</h2>
				<p className="text-muted-foreground">
					Here are some of the projects I've worked on. Each one represents a unique challenge and
					learning experience.
				</p>
			</div>

			<div className="flex flex-col gap-6 animate-slide-in-up">
				{projectsData.map((project, index) => (
					<Project
						key={index}
						name={project.name}
						description={project.description}
						technologies={project.technologies}
						thumbnail={project.thumbnail}
						images={project.images}
						liveUrl={project.liveUrl}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
