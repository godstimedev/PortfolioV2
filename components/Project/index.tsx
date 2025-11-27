'use client';
import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import ProjectModal from '../ProjectModal';

interface ProjectProps {
	name: string;
	description: string;
	technologies: string[];
	thumbnail: StaticImageData;
	images: StaticImageData[];
	liveUrl?: string;
}

const Project = (props: ProjectProps) => {
	const { name, description, technologies, thumbnail, images, liveUrl } = props;
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div className="group w-full flex flex-col md:flex-row items-center gap-6 p-6 border border-accent rounded-xl bg-card hover:bg-accent transition-all duration-300 hover:shadow-xl animate-fade-in">
				<div className="relative overflow-hidden rounded-xl">
					<Image
						src={thumbnail}
						alt={name}
						className="w-full md:w-[240px] h-[200px] rounded-xl object-cover group-hover:scale-110 transition-transform duration-500"
					/>
					<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
				</div>

				<div className="flex-1 flex flex-col gap-4">
					<div className="flex flex-wrap items-center gap-2">
						{technologies.map((tech, index) => (
							<span
								key={index}
								className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
							>
								{tech}
							</span>
						))}
					</div>

					<div className="flex flex-col gap-2">
						<h3 className="sm:text-xl text-lg font-bold text-foreground group-hover:text-primary transition-colors">
							{name}
						</h3>
						<p className="text-muted-foreground text-sm">{description}</p>
					</div>

					<div className="flex items-center gap-3 mt-2">
						<Button
							size="sm"
							variant="default"
							onClick={() => setIsModalOpen(true)}
							className="gap-2 group/btn"
						>
							<Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
							View Project
						</Button>
						{liveUrl && (
							<Button size="sm" variant="outline" asChild className="gap-2 group/btn">
								<Link href={liveUrl} target="_blank" rel="noopener noreferrer">
									<ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
									Live Demo
								</Link>
							</Button>
						)}
					</div>
				</div>
			</div>

			<ProjectModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				images={images}
				projectName={name}
			/>
		</>
	);
};

export default Project;
