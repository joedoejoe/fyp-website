const teamInformation = [
	{
		name: "Gavin Tan",
		role: "Lead",
		imageUrl:
			"https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png",
	},
	{
		name: "Joe Tian",
		role: "Developer",
		imageUrl:
			"https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png",
	},
	{
		name: "Andy",
		role: "UI/UX Designer",
		imageUrl:
			"https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png",
	},
	{
		name: "Wei Feng",
		role: "Developer",
		imageUrl:
			"https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png",
	},
	{
		name: "Kee Yang",
		role: "Documentation",
		imageUrl:
			"https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png",
	},
];

const TeamSection = () => {
	return (
		<div className="h-screen mt-48 bg-white py-24 sm:py-32" id="Our Team">
			<div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
				<div className="max-w-2xl">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Meet the Team
					</h2>
				</div>
				<ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
					{teamInformation.map((person) => (
						<li key={person.name}>
							<div className="flex items-center gap-x-6">
								<img className="w-40 rounded-full" src={person.imageUrl} />
								<div>
									<h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
										{person.name}
									</h3>
									<p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TeamSection;
