"use client"; // This is a client component

import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const validateForm = () => {
		let valid = true;
		const newErrors = { name: "", email: "", message: "" };

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
			valid = false;
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
			valid = false;
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validateForm()) {
			// Here you would typically send the form data to a backend service
			console.log("Form submitted successfully:", formData);
			alert("Thank you for your message! We will get back to you soon.");
			setFormData({ name: "", email: "", message: "" }); // Clear form
		} else {
			console.log("Form has errors.");
		}
	};

	return (
		<div className="container mx-auto p-8">
			<h1 className="text-4xl font-bold mb-8">Contact Us</h1>
			<p className="text-lg mb-4">
				Have questions or need assistance? Feel free to reach out to Insideout
				Technologies LLC. We're here to help!
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
				<div>
					<h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
					<form
						onSubmit={handleSubmit}
						className="space-y-4"
					>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
							/>
							{errors.name && (
								<p className="text-red-500 text-sm mt-1">{errors.name}</p>
							)}
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
							/>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">{errors.email}</p>
							)}
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={5}
								value={formData.message}
								onChange={handleChange}
								className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
							></textarea>
							{errors.message && (
								<p className="text-red-500 text-sm mt-1">{errors.message}</p>
							)}
						</div>
						<button
							type="submit"
							className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Submit
						</button>
					</form>
				</div>

				<div>
					<h2 className="text-2xl font-semibold mb-4">
						Our Contact Information
					</h2>
					<p className="mb-2">**Phone:** (555) 123-4567</p>
					<p className="mb-2">**Email:** info@insideouttech.com</p>
					<p className="mb-2">
						**Service Area:** Proudly serving [Your City/Region] and surrounding
						areas.
					</p>
					<p className="mt-4 text-sm text-gray-600">
						For in-home residential computer repair, please call us to schedule
						an appointment.
					</p>
				</div>
			</div>
		</div>
	);
}
