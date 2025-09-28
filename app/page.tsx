import { Button } from '@/components/ui/button';
import { BriefcaseBusiness, MessageCircle } from 'lucide-react';

export default function Home() {
	return (
		<section className="p-4 flex flex-col gap-4">
			<h1>
				{'</>'} <br />
				<span className="text-gray-300">Hey there, I am</span> <br />
				Godstime Agholor <br />
				{'</>'}
			</h1>

			<p>
				I'm a software engineer with over 5 years of experience. I love building cool and useful digital
				products. I'm a problem-solver and enjoy finding clever and simple ways to make things work well
				for users. I can work on all parts of a software project, from the user interface to the inner
				workings. My goal is to create well-built systems that people love to use. I'm always learning
				new things, and I'm especially interested in machine learning, artificial intelligence, and the
				Internet of Things.
			</p>

			<div className="flex items-center gap-4">
				<Button>
					View Projects <BriefcaseBusiness />
				</Button>

				<Button>
					Send Message <MessageCircle />
				</Button>
			</div>
		</section>
	);
}
