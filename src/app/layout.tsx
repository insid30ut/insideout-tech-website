import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component

export const metadata: Metadata = {
	title: "Insideout Technologies LLC",
	description:
		"Network Solutions, Computer Repair, and Camera System Setups for Business and Residential Clients.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar /> {/* Add the Navbar component here */}
				<main>{children}</main>
				<Footer /> {/* Add the Footer component here */}
			</body>
		</html>
	);
}
