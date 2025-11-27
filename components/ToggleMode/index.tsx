'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	if (!mounted) {
		return (
			<Button variant="outline" className="flex items-center justify-start w-full border-none gap-2">
				<Sun className="h-[1.2rem] w-[1.2rem]" />
				<span>Loading...</span>
			</Button>
		);
	}

	return (
		<Button
			variant="ghost"
			className="flex items-center justify-start w-full border-none gap-2 hover:bg-accent transition-colors"
			onClick={toggleTheme}
		>
			<Sun className=" scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			<Moon className="absolute  scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
			<span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
		</Button>
	);
}
