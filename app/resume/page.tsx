'use client';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MyResume = '/pdf/GodstimeAgholorResume.pdf';

const Resume = () => {
	return (
		<section className="flex flex-col gap-6 animate-fade-in">
			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
				<div>
					<h2 className="mb-2">My Resume</h2>
					<p className="text-muted-foreground">
						Download or view my resume to learn more about my experience.
					</p>
				</div>
				<div className="flex items-center gap-3">
					<Button size="lg" variant="outline" asChild className="gap-2">
						<a href={MyResume} target="_blank" rel="noopener noreferrer">
							<ExternalLink className="w-4 h-4" />
							Open
						</a>
					</Button>
					<Button size="lg" asChild className="gap-2">
						<a href={MyResume} download="GodstimeAgholor_Resume.pdf">
							<Download className="w-4 h-4" />
							Download
						</a>
					</Button>
				</div>
			</div>

			<div className="relative w-full border border-accent rounded-xl overflow-hidden bg-card shadow-lg">
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none z-10" />
				<iframe
					src={`${MyResume}#toolbar=0&navpanes=0&scrollbar=0`}
					className="w-full h-[500px]"
					title="Resume Preview"
					style={{
						border: 'none',
					}}
				/>
			</div>
		</section>
	);
};

export default Resume;
