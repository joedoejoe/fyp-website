import React from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from '@material-tailwind/react';

function Team() {
    return (
        <div id='team' className='h-screen pt-24 mx-auto max-w-screen-md py-12'>
            <Typography variant='h2' color='blue-gray' className='mb-2'>
                Team
            </Typography>

            <Card className='mb-12 overflow-hidden'>
                <img
                    alt='nature'
                    className='h-[32rem] w-full object-cover object-center'
                    src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80'
                />
            </Card>
            <Typography color='gray' className='font-normal'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                corrupti id ea minus, possimus eius pariatur molestiae soluta,
                laudantium dolores autem similique temporibus excepturi ad ullam
                eum harum, earum illo?
            </Typography>
        </div>
    );
}

export default Team;
