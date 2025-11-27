'use client';
import { Gt } from '@/assets/images';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import MobileSidebar from '../MobileSidebar';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentTitle, setCurrentTitle] = useState(0);
	const titles = ['Software', 'Frontend'];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTitle((prev) => (prev + 1) % titles.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:hidden p-4 border-b border-accent bg-background/80 backdrop-blur-md">
				<Link href="/">
					<div className="flex items-center gap-4">
						<Image
							src={Gt}
							alt="Godstime Agholor"
							className="w-16 h-16 rounded-xl object-cover"
							priority
						/>

						<div className="flex flex-col">
							<h2 className="font-bold text-base">Godstime Agholor</h2>
							<div className="h-5 relative">
								{titles.map((title, index) => (
									<h6
										key={index}
										className={`text-sm text-primary h-5 flex items-center absolute inset-0 transition-opacity duration-500 ${
											currentTitle === index ? 'opacity-100' : 'opacity-0'
										}`}
									>
										{title} Engineer
									</h6>
								))}
							</div>
						</div>
					</div>
				</Link>

				<button onClick={() => setIsOpen(!isOpen)} className="z-50 relative">
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</header>

			{/* Mobile Sidebar */}
			<div
				className={`md:hidden fixed left-0 right-0 top-[88px] bottom-0 transition-transform duration-300 bg-background z-40 shadow-2xl border-t border-accent ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>

			{/* Backdrop Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden animate-fade-in"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</>
	);
};

export default Header;
