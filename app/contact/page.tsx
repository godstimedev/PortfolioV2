'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Mail,
	Send,
	User,
	MessageSquare,
	Phone,
	Calendar,
	CheckCircle2,
	Loader2,
	AlertCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
		type: null,
		message: '',
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setStatus({ type: null, message: '' });

		try {
			// EmailJS configuration - Replace these with your actual values
			// Get them from: https://www.emailjs.com/
			const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
			const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
			const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

			await emailjs.send(
				serviceId,
				templateId,
				{
					from_name: formData.name,
					from_email: formData.email,
					subject: formData.subject,
					message: formData.message,
					to_email: 'agholorgodstime18@gmail.com',
				},
				publicKey
			);

			setStatus({
				type: 'success',
				message: "Message sent successfully! I'll get back to you soon.",
			});

			// Reset form
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
			});

			// Clear success message after 5 seconds
			setTimeout(() => {
				setStatus({ type: null, message: '' });
			}, 5000);
		} catch (error) {
			console.error('EmailJS Error:', error);
			setStatus({
				type: 'error',
				message: 'Failed to send message. Please try again or contact me directly via email.',
			});
		} finally {
			setIsLoading(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		// Clear status when user starts typing
		if (status.type) {
			setStatus({ type: null, message: '' });
		}
	};

	return (
		<section className="flex flex-col gap-8 animate-fade-in">
			<div>
				<h2 className="mb-2">Get In Touch</h2>
				<p className="text-muted-foreground">
					Have a project in mind or just want to say hi? Feel free to reach out!
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-8">
				{/* Contact Info */}
				<div className="flex flex-col gap-6">
					<a
						href="https://cal.com/godstime-agholor-zaxnvg/15min"
						target="_blank"
						rel="noopener noreferrer"
						className="block p-6 border border-accent rounded-xl bg-card hover:bg-accent transition-all duration-300 hover:shadow-lg animate-slide-in-left group"
					>
						<div className="flex items-center gap-4 mb-3">
							<div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
								<Calendar className="w-6 h-6 text-primary" />
							</div>
							<h3 className="text-lg font-semibold">Schedule a Call</h3>
						</div>
						<p className="text-muted-foreground text-sm">Book a 15-minute discovery call</p>
					</a>

					<a
						href="https://wa.me/2348103904589"
						target="_blank"
						rel="noopener noreferrer"
						className="block p-6 border border-accent rounded-xl bg-card hover:bg-accent transition-all duration-300 hover:shadow-lg animate-slide-in-left group"
					>
						<div className="flex items-center gap-4 mb-3">
							<div className="p-3 bg-[#25D366]/10 rounded-lg group-hover:bg-[#25D366]/20 transition-colors">
								<Phone className="w-6 h-6 text-[#25D366]" />
							</div>
							<h3 className="text-lg font-semibold">WhatsApp</h3>
						</div>
						<p className="text-muted-foreground text-sm">+234 810 390 4589</p>
					</a>

					<div className="p-6 border border-accent rounded-xl bg-card space-y-4">
						<h3 className="text-lg font-semibold">Why Work With Me?</h3>
						<ul className="space-y-3 text-muted-foreground">
							<li className="flex items-center gap-2 text-sm">
								<span className="text-primary mt-1">✓</span>
								<span>4+ years of professional experience</span>
							</li>
							<li className="flex items-center gap-2 text-sm">
								<span className="text-primary mt-1">✓</span>
								<span>Client-centric collaboration</span>
							</li>
							<li className="flex items-center gap-2 text-sm">
								<span className="text-primary mt-1">✓</span>
								<span>Clear and consistent communication</span>
							</li>
							<li className="flex items-center gap-2 text-sm">
								<span className="text-primary mt-1">✓</span>
								<span>Timely execution and delivery</span>
							</li>
							<li className="flex items-center gap-2 text-sm">
								<span className="text-primary mt-1">✓</span>
								<span>Scalable and maintainable software</span>
							</li>
							<li className="flex items-center gap-2 text-sm">
								<span className="text-primary mt-1">✓</span>
								<span>Responsive and user-friendly designs</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Contact Form */}
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-5 p-6 border border-accent rounded-xl bg-card animate-slide-in-right"
				>
					<div className="flex flex-col gap-2">
						<label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
							<User className="w-4 h-4 text-primary" />
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							autoComplete="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="text-sm px-4 py-3 border border-accent rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
							placeholder="John Doe"
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
							<Mail className="w-4 h-4 text-primary" />
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							autoComplete="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="text-sm px-4 py-3 border border-accent rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
							placeholder="john@example.com"
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
							<MessageSquare className="w-4 h-4 text-primary" />
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							autoComplete="off"
							value={formData.subject}
							onChange={handleChange}
							required
							className="text-sm px-4 py-3 border border-accent rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
							placeholder="Project Inquiry"
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
							<MessageSquare className="w-4 h-4 text-primary" />
							Message
						</label>
						<textarea
							id="message"
							name="message"
							autoComplete="off"
							value={formData.message}
							onChange={handleChange}
							required
							rows={8}
							className="text-sm px-4 py-3 border border-accent rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
							placeholder="Tell me about your project..."
						/>
					</div>

					{/* Status Message */}
					{status.type && (
						<div
							className={`flex items-center gap-2 p-4 rounded-lg ${
								status.type === 'success'
									? 'bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400'
									: 'bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400'
							}`}
						>
							{status.type === 'success' ? (
								<CheckCircle2 className="w-5 h-5 flex-shrink-0" />
							) : (
								<AlertCircle className="w-5 h-5 flex-shrink-0" />
							)}
							<p className="text-sm">{status.message}</p>
						</div>
					)}

					<Button type="submit" size="lg" className="w-full gap-2 group" disabled={isLoading}>
						{isLoading ? (
							<>
								<Loader2 className="w-4 h-4 animate-spin" />
								Sending...
							</>
						) : (
							<>
								Send Message
								<Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</>
						)}
					</Button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
