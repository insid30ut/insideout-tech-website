import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-gray-800 p-4 text-white">
			<div className="container mx-auto flex justify-between items-center">
				<Link
					href="/"
					className="text-2xl font-bold"
				>
					Insideout Technologies LLC
				</Link>
				<ul className="flex space-x-4">
					<li>
						<Link
							href="/"
							className="hover:text-gray-300"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/services"
							className="hover:text-gray-300"
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="hover:text-gray-300"
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="hover:text-gray-300"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
