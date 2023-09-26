import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FeaturesSection = () => {
	return (
		<div id="Features" className="h-screen pt-24 mx-auto max-w-screen-md py-12">
			<Typography variant="h2" color="blue-gray" className="mb-2">
				Features
			</Typography>

			<Card className="mb-12 overflow-hidden">
				<img
					alt="nature"
					className="h-[32rem] w-full object-cover object-center"
					src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
				/>
			</Card>
			<Typography color="gray" className="font-normal">
			Features include a login with 2FA (utilizing biometrics authentication), allowing users to check their timetable, students to mark their attendance using biometrics authentication, staff/teachers to view the attendance rate of their classes. Super admins can also utilize our app to manage users, creating new user accounts or editing existing ones.
			</Typography>
		</div>
	);
};

export default FeaturesSection;
