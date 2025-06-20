export default function Services() {
	return (
		<div className="container mx-auto p-8">
			<h1 className="text-4xl font-bold mb-8">Our Services</h1>
			<p className="text-lg mb-4">
				At Insideout Technologies LLC, we offer a comprehensive range of
				technology solutions for both business and residential clients. Our goal
				is to provide reliable, efficient, and personalized services to meet
				your unique needs.
			</p>

			<h2 className="text-3xl font-semibold mt-12 mb-6">
				Residential Services
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-gray-100 p-6 rounded-lg shadow-md">
					<h3 className="text-2xl font-bold mb-4">
						Computer Repair & Support (In-Home House Calls!)
					</h3>
					<p className="mb-4">
						Is your computer running slow? Do you have a virus, or just need
						help setting up a new device? Our friendly technicians provide
						expert computer repair and support, right in the comfort of your
						home! We understand that technology can be tricky, especially for
						older computer users, which is why we specialize in convenient,
						on-site house calls. No need to unplug everything and haul it to a
						shop – we come to you!
					</p>
					<ul className="list-disc list-inside">
						<li>Virus and Malware Removal</li>
						<li>Computer Tune-ups and Optimization</li>
						<li>Hardware Repair and Upgrades</li>
						<li>Software Installation and Troubleshooting</li>
						<li>New Computer Setup and Data Transfer</li>
						<li>Printer and Peripheral Setup</li>
						<li>Personalized Tech Support & Training</li>
					</ul>
				</div>
				<div className="bg-gray-100 p-6 rounded-lg shadow-md">
					<h3 className="text-2xl font-bold mb-4">Home Camera System Setup</h3>
					<p className="mb-4">
						Enhance the security of your home with a professionally installed
						camera system. We help you choose the right system and set it up for
						optimal coverage and ease of use.
					</p>
					<ul className="list-disc list-inside">
						<li>Security Camera Installation (Wired & Wireless)</li>
						<li>DVR/NVR Setup and Configuration</li>
						<li>Remote Viewing Setup on Mobile Devices</li>
						<li>System Maintenance and Troubleshooting</li>
					</ul>
				</div>
			</div>

			<h2 className="text-3xl font-semibold mt-12 mb-6">Business Solutions</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-gray-100 p-6 rounded-lg shadow-md">
					<h3 className="text-2xl font-bold mb-4">Network Solutions</h3>
					<p className="mb-4">
						Keep your business connected and secure with our comprehensive
						network services. From initial setup to ongoing maintenance, we
						ensure your network runs smoothly and efficiently.
					</p>
					<ul className="list-disc list-inside">
						<li>Network Design and Implementation</li>
						<li>Router and Switch Configuration</li>
						<li>Wi-Fi Setup and Optimization</li>
						<li>Network Security and Firewall Management</li>
						<li>VPN (Virtual Private Network) Setup</li>
						<li>Network Troubleshooting and Support</li>
					</ul>
				</div>
				<div className="bg-gray-100 p-6 rounded-lg shadow-md">
					<h3 className="text-2xl font-bold mb-4">
						Business Camera System Setup
					</h3>
					<p className="mb-4">
						Protect your business assets and monitor your premises with our
						professional camera system installations. We provide scalable
						solutions tailored to your business security needs.
					</p>
					<ul className="list-disc list-inside">
						<li>Commercial Security Camera Installation</li>
						<li>Advanced Surveillance System Integration</li>
						<li>Remote Monitoring Solutions</li>
						<li>Access Control Integration</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
