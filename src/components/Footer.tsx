export default function Footer() {
	return (
		<footer className="bg-gray-800 p-4 text-white mt-8">
			<div className="container mx-auto text-center">
				<p>
					&copy; {new Date().getFullYear()} Insideout Technologies LLC. All
					rights reserved.
				</p>
				<p className="text-sm mt-2">
					Providing Network Solutions, Computer Repair, and Camera System
					Setups.
				</p>
			</div>
		</footer>
	);
}
