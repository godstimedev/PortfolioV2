'use client';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
	const [particles, setParticles] = useState<Array<{
		left: string;
		top: string;
		delay: string;
		duration: string;
	}>>([]);

	// Generate random values only on client to avoid hydration mismatch
	useEffect(() => {
		setParticles(
			[...Array(20)].map(() => ({
				left: `${Math.random() * 100}%`,
				top: `${Math.random() * 100}%`,
				delay: `${Math.random() * 5}s`,
				duration: `${15 + Math.random() * 10}s`,
			}))
		);
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			{/* Gradient Orbs */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
			<div
				className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slower"
				style={{ animationDelay: '1s' }}
			/>
			<div
				className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"
				style={{ animationDelay: '2s' }}
			/>

			{/* Floating Particles */}
			<div className="absolute inset-0">
				{particles.map((particle, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
						style={{
							left: particle.left,
							top: particle.top,
							animationDelay: particle.delay,
							animationDuration: particle.duration,
						}}
					/>
				))}
			</div>

			{/* Animated Lines */}
			<svg
				className="absolute inset-0 w-full h-full opacity-20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
						<stop offset="50%" stopColor="var(--primary)" stopOpacity="0.3" />
						<stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
					</linearGradient>
				</defs>

				{/* Curved Lines */}
				<path
					d="M 0 200 Q 400 100, 800 200 T 1600 200"
					stroke="url(#line-gradient)"
					strokeWidth="2"
					fill="none"
					className="animate-draw"
				/>
				<path
					d="M 0 400 Q 300 300, 600 400 T 1200 400"
					stroke="url(#line-gradient)"
					strokeWidth="2"
					fill="none"
					className="animate-draw-delayed"
				/>
			</svg>

			{/* Grid Pattern */}
			<div
				className="absolute inset-0 opacity-5"
				style={{
					backgroundImage: `
						linear-gradient(to right, var(--primary) 1px, transparent 1px),
						linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
					`,
					backgroundSize: '100px 100px',
				}}
			/>
		</div>
	);
};

export default AnimatedBackground;

