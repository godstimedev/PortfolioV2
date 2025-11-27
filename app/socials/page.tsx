'use client';
import React from 'react';
import SocialCard from '@/components/SocialCard';
import {
	GitHubSocialIcon,
	LinkedInIcon,
	TwitterIcon,
	EmailIcon,
	PortfolioIcon,
	WhatsAppIcon,
} from '@/assets/svgs/socials';

const socials = [
	{
		name: 'LinkedIn',
		link: 'https://linkedin.com/in/godstime-agholor-2939a81a4',
		description: 'Connect with me professionally',
		icon: <LinkedInIcon />,
	},
	{
		name: 'X (Twitter)',
		link: 'https://twitter.com/_Godstimee',
		description: "Follow me let's connect",
		icon: <TwitterIcon />,
	},
	{
		name: 'Email',
		link: 'mailto:agholorgodstime18@gmail.com',
		description: 'Send me an email',
		icon: <EmailIcon />,
	},

	{
		name: 'WhatsApp',
		link: 'https://wa.me/2348103904589',
		description: 'Message me instantly',
		icon: <WhatsAppIcon />,
	},
	{
		name: 'GitHub',
		link: 'https://github.com/godstimedev',
		description: 'Check out my projects',
		icon: <GitHubSocialIcon />,
	},
	{
		name: 'Portfolio',
		link: '/',
		description: "You're already here!",
		icon: <PortfolioIcon />,
	},
];

const Socials = () => {
	return (
		<section className="flex flex-col gap-8 animate-fade-in">
			<div>
				<h2 className="mb-2">Connect With Me</h2>
				<p className="text-muted-foreground">
					Find me on these platforms. Let's connect and collaborate!
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-4">
				{socials.map((social, index) => (
					<SocialCard
						key={index}
						name={social.name}
						icon={social.icon}
						link={social.link}
						description={social.description}
					/>
				))}
			</div>
		</section>
	);
};

export default Socials;
