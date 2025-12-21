import { Button } from '@/components/ui/button';
import { BriefcaseBusiness, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import HeroContent from '@/components/HeroContent';

export default function Home() {
	return (
		<section className="flex flex-col gap-4">
			<HeroContent />

			<div className="flex flex-wrap items-center gap-4 mt-8 animate-fade-in">
				<Button size={'xl'} asChild className="group">
					<Link href="/projects">
						View Projects{' '}
						<BriefcaseBusiness size={24} className="ml-2 group-hover:scale-110 transition-transform" />
					</Link>
				</Button>

				<Button size={'xl'} variant={'secondary'} asChild className="group">
					<Link href="/contact">
						Hire me{' '}
						<MessageCircle size={24} className="ml-2 group-hover:scale-110 transition-transform" />
					</Link>
				</Button>
			</div>
		</section>
	);
}
