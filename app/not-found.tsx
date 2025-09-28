import React from 'react';

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen text-center mx-auto">
			<h1 className="text-6xl font-bold">404</h1>
			<p className="mt-4 text-xl">Oops! Page not found.</p>
			<a href="/" className="mt-6 text-blue-500 underline">
				Go back home
			</a>
		</div>
	);
};

export default NotFound;
