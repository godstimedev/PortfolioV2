'use client';
import { Button } from '@/components/ui/button';
import { BriefcaseBusiness, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
	return (
		<section className="flex flex-col gap-4 animate-fade-in">
			<h1 className="animate-slide-in-left">
				{/* {'</>'} <br /> */}
				👋 <br />
				<span className="text-gray-300">Hey there, I am </span> <br />
				Godstime Agholor <br />
			</h1>

			<p className="animate-slide-in-right">
				A versatile engineer with over 4 years of experience building responsive, user-friendly digital
				products. I enjoy solving problems, simplifying complex workflows, and creating seamless
				experiences that people love to use. <br />
				My goal is simple: to craft digital products that people enjoy using and businesses can rely on.
			</p>

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
