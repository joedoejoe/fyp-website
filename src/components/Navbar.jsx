import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";

const NavMenuBar = () => {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	const menuButtons = ["Product", "Features", "Our Team", "Documentation"];

	return (
		<Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
			<div className="flex justify-between text-blue-gray-900">
				<a className="font-medium text-2xl" href="/">
					FYP-23-S3-28
				</a>
				<div className="flex items-center gap-4">
					<div className="mr-4 hidden lg:block">
						<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
							{menuButtons.map((menuButton) => (
								<Typography variant="small" className="p-1 font-normal">
									<a href={`#${menuButton}`} className="flex items-center w-16">
										{menuButton}
									</a>
								</Typography>
							))}

							<Button variant="gradient" size="sm" fullWidth className="ml-8">
								Contact Us
							</Button>
						</ul>
					</div>

					<IconButton
						variant="text"
						className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
						ripple={false}
						onClick={() => setOpenNav(!openNav)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path d={openNav ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
						</svg>
					</IconButton>
				</div>
			</div>

			<MobileNav open={openNav}>
				<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
					{menuButtons.map((menuButton) => {
						return (
							<Typography variant="small" color="blue-gray" className="p-1 font-normal">
								<a href={`#${menuButton}`} className="flex items-center">
									{menuButton}
								</a>
							</Typography>
						);
					})}
				</ul>

				<Button variant="gradient" size="sm" fullWidth>
					Contact Us
				</Button>
			</MobileNav>
		</Navbar>
	);
};

export default NavMenuBar;
