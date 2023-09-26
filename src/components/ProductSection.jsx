import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const ProductSection = () => {
	return (
		<div id="Product" className="h-screen pt-24 mx-auto max-w-screen-md py-12">
			<Typography variant="h2" color="blue-gray" className="mb-2">
				Product
			</Typography>

			<Card className="mb-12 overflow-hidden">
				<img
					alt="nature"
					className="h-[32rem] w-full object-cover object-center"
					src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
				/>
			</Card>
			<Typography color="gray" className="font-normal">
			Our web app does the same stuff, but even better
			</Typography>
		</div>
	);
};

export default ProductSection;
