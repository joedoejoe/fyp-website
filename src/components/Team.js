const people = [
    {
        name: 'Gavin Tan',
        role: 'Lead',
        imageUrl:
            'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png',
    },
    {
        name: 'Joe Tian',
        role: '',
        imageUrl:
            'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png',
    },
    {
        name: 'Andy ',
        role: '',
        imageUrl:
            'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png',
    },
    {
        name: 'Wei Feng',
        role: '',
        imageUrl:
            'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png',
    },
    {
        name: 'Kee Yang',
        role: '',
        imageUrl:
            'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png',
    },

    // More people...
];

export default function Example() {
    return (
        <div id='team' className='h-screen mt-48 bg-white py-24 sm:py-32'>
            <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
                <div className='max-w-2xl'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        Meet our leadership
                    </h2>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit
                        odio vitae elementum enim vitae ullamcorper suspendisse.
                    </p>
                </div>
                <ul
                    role='list'
                    className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className='flex items-center gap-x-6'>
                                <img
                                    className='w-40 rounded-full'
                                    src={person.imageUrl}
                                    alt=''
                                />
                                <div>
                                    <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                                        {person.name}
                                    </h3>
                                    <p className='text-sm font-semibold leading-6 text-indigo-600'>
                                        {person.role}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
