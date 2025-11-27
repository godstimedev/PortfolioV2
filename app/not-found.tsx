'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-[70vh] text-center mx-auto animate-fade-in">
			<div className="relative mb-8">
				<h1 className="text-9xl font-bold text-primary/20 animate-pulse">404</h1>
				<Search className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-primary animate-bounce" />
			</div>
			<h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
			<p className="text-muted-foreground mb-8 max-w-md">
				Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
			</p>
			<Button size="lg" asChild className="gap-2 group">
				<Link href="/">
					<Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
					Back to Home
				</Link>
			</Button>
		</div>
	);
};

export default NotFound;
