import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { Download, Users, Clock, Shield, MapPin, Leaf, Car, TreePine, Gauge } from 'lucide-react';
import {observer} from "mobx-react-lite";

interface LandingPageProps {
	onGetStarted: () => void;
}

const features = [
	{
		icon: Users,
		title: 'Community Driven',
		description: 'Connect with fellow students for reliable carpooling'
	},
	{
		icon: Clock,
		title: 'Real-time Updates',
		description: 'Track your ride and get instant notifications'
	},
	{
		icon: Shield,
		title: 'Verified Users',
		description: 'Safe rides with verified Queens College students'
	},
	{
		icon: Leaf,
		title: 'Eco-Friendly',
		description: 'Reduce your carbon footprint through shared rides'
	}
];

const environmentalStats = [
	{
		icon: Car,
		value: '30%',
		label: 'Fewer Cars on Campus'
	},
	{
		icon: TreePine,
		value: '25%',
		label: 'CO₂ Reduction'
	},
	{
		icon: Gauge,
		value: '40%',
		label: 'Less Traffic'
	}
];

function Landing(){
	const [isInstallable, setIsInstallable] = useState(false);
	const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

	useEffect(() => {
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			setDeferredPrompt(e);
			setIsInstallable(true);
		});
	}, []);

	const handleInstall = async () => {
		if (!deferredPrompt) return;
		deferredPrompt.prompt();
		const { outcome } = await deferredPrompt.userChoice;
		if (outcome === 'accepted') {
			setIsInstallable(false);
		}
		setDeferredPrompt(null);
	};

	const handleGetStarted = () => {

	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
			<header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
				<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
					{/*<Logo />*/}
					<nav className="hidden md:flex items-center space-x-8">
						<a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
						<a href="#sustainability" className="text-gray-600 hover:text-gray-900">Sustainability</a>
						<a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
						<button
							onClick={handleGetStarted}
							className="bg-eco-green text-white px-6 py-2 rounded-full hover:bg-eco-dark transition-colors">
							Get Started
						</button>
					</nav>
				</div>
			</header>

			<main className="pt-24 pb-16">
				{/* Hero Section */}
				<section className="max-w-7xl mx-auto px-4 py-16">
					<div className="text-center">
						<motion.h1
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="text-5xl font-bold text-gray-900 mb-6"
						>
							Sustainable Commuting for a Greener Campus
						</motion.h1>
						<motion.p
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
						>
							Join the eco-friendly revolution. Connect with fellow students for sustainable carpooling while reducing your carbon footprint.
						</motion.p>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="flex flex-col sm:flex-row gap-4 justify-center"
						>
							<button
								onClick={handleGetStarted}
								className="bg-eco-green text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-eco-dark transition-colors"
							>
								Get Started
							</button>
							{isInstallable && (
								<button
									onClick={handleInstall}
									className="flex items-center justify-center gap-2 border-2 border-eco-green text-eco-dark px-8 py-3 rounded-full text-lg font-medium hover:bg-eco-green/10 transition-colors"
								>
									<Download className="w-5 h-5" />
									Install App
								</button>
							)}
						</motion.div>
					</div>
				</section>

				{/* Features Section */}
				<section id="features" className="max-w-7xl mx-auto px-4 py-16">
					<h2 className="text-3xl font-bold text-center mb-12">Why Choose QCommute?</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{features.map((feature, index) => {
							const Icon = feature.icon;
							return (
								<motion.div
									key={feature.title}
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="bg-white p-6 rounded-xl shadow-md"
								>
									<div className="w-12 h-12 bg-eco-green/10 rounded-full flex items-center justify-center mb-4">
										<Icon className="w-6 h-6 text-eco-dark" />
									</div>
									<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
									<p className="text-gray-600">{feature.description}</p>
								</motion.div>
							);
						})}
					</div>
				</section>

				{/* Sustainability Impact Section */}
				<section id="sustainability" className="bg-eco-green/5 py-16">
					<div className="max-w-7xl mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-8">Environmental Impact</h2>
						<p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
							Together, we're making a difference. Every shared ride contributes to a more sustainable future for our campus and community.
						</p>
						<div className="grid md:grid-cols-3 gap-8">
							{environmentalStats.map((stat, index) => {
								const Icon = stat.icon;
								return (
									<motion.div
										key={stat.label}
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className="bg-white p-6 rounded-xl shadow-md text-center"
									>
										<div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<Icon className="w-8 h-8 text-eco-dark" />
										</div>
										<h3 className="text-3xl font-bold text-eco-dark mb-2">{stat.value}</h3>
										<p className="text-gray-600">{stat.label}</p>
									</motion.div>
								);
							})}
						</div>
						<div className="mt-12 text-center">
							<p className="text-sm text-gray-500">*Based on average user data from similar carpooling initiatives</p>
						</div>
					</div>
				</section>

				{/* How It Works Section */}
				<section id="how-it-works" className="max-w-7xl mx-auto px-4 py-16">
					<h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="text-center"
						>
							<div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-eco-dark">1</span>
							</div>
							<h3 className="text-xl font-semibold mb-2">Sign Up</h3>
							<p className="text-gray-600">Create your account with your Queens College email</p>
						</motion.div>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-center"
						>
							<div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-eco-dark">2</span>
							</div>
							<h3 className="text-xl font-semibold mb-2">Find or Offer Rides</h3>
							<p className="text-gray-600">Connect with students heading your way</p>
						</motion.div>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-center"
						>
							<div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl font-bold text-eco-dark">3</span>
							</div>
							<h3 className="text-xl font-semibold mb-2">Travel Together</h3>
							<p className="text-gray-600">Share rides and reduce your carbon footprint</p>
						</motion.div>
					</div>
				</section>
			</main>

			<footer className="bg-gray-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid md:grid-cols-3 gap-8">
						<div>
							{/*<Logo variant="light" />*/}
							<p className="mt-4 text-gray-400">Making student commutes easier, safer, and more sustainable.</p>
						</div>
						<div>
							<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
							<ul className="space-y-2">
								<li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
								<li><a href="#sustainability" className="text-gray-400 hover:text-white">Sustainability</a></li>
								<li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
							</ul>
						</div>
						<div>
							<h4 className="text-lg font-semibold mb-4">Contact</h4>
							<p className="text-gray-400">Queens College<br />65-30 Kissena Blvd<br />Queens, NY 11367</p>
						</div>
					</div>
					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
						<p>&copy; {new Date().getFullYear()} QCommute. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
export default observer(Landing);
