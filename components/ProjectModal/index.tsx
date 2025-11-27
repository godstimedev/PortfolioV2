'use client';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

type PropTypes = {
	isOpen: boolean;
	onClose: () => void;
	images: StaticImageData[];
	projectName: string;
};

const ProjectModal = (props: PropTypes) => {
	const { isOpen, onClose, images, projectName } = props;
	const [currentIndex, setCurrentIndex] = useState(0);

	if (!isOpen) return null;

	const handlePrevious = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Escape') onClose();
		if (e.key === 'ArrowLeft') handlePrevious();
		if (e.key === 'ArrowRight') handleNext();
	};

	return (
		<div
			className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
			onClick={onClose}
			onKeyDown={handleKeyDown}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			<div
				className="relative w-full max-w-5xl  mx-4 bg-background rounded-xl shadow-2xl overflow-hidden animate-slide-in-up"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="flex items-center justify-between p-4 border-b border-accent bg-card">
					<h3 id="modal-title" className="text-xl font-semibold">
						{projectName}
					</h3>
					<button
						onClick={onClose}
						className="p-2 hover:bg-accent rounded-lg transition-colors"
						aria-label="Close modal"
					>
						<X size={24} />
					</button>
				</div>

				{/* Image Container */}
				<div className="relative  bg-muted h-[400px]">
					<Image
						src={images[currentIndex]}
						alt={`${projectName} screenshot ${currentIndex + 1}`}
						className="w-full h-full object-contain"
						priority
					/>

					{/* Navigation Arrows */}
					{images.length > 1 && (
						<>
							<button
								onClick={handlePrevious}
								className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-background backdrop-blur-sm rounded-full transition-all hover:scale-110 shadow-lg"
								aria-label="Previous image"
							>
								<ChevronLeft size={24} />
							</button>
							<button
								onClick={handleNext}
								className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-background backdrop-blur-sm rounded-full transition-all hover:scale-110 shadow-lg"
								aria-label="Next image"
							>
								<ChevronRight size={24} />
							</button>
						</>
					)}
				</div>

				{/* Thumbnails */}
				{images.length > 1 && (
					<div className="flex items-center justify-center gap-2 p-4 bg-card border-t border-accent overflow-x-auto">
						{images.map((image, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
									currentIndex === index
										? 'border-primary scale-110 shadow-lg'
										: 'border-accent hover:border-primary/50 hover:scale-105'
								}`}
								aria-label={`View image ${index + 1}`}
							>
								<Image
									src={image}
									alt={`${projectName} thumbnail ${index + 1}`}
									className="w-full h-full object-cover"
								/>
							</button>
						))}
					</div>
				)}

				{/* Image Counter */}
				{images.length > 1 && (
					<div className="absolute top-20 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium">
						{currentIndex + 1} / {images.length}
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectModal;
