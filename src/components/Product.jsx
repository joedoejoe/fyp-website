import React from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from '@material-tailwind/react';

function Product() {
    return (
        <div
            id='product'
            className='h-screen pt-24 mx-auto max-w-screen-md py-12'
        >
            <Typography variant='h2' color='blue-gray' className='mb-2'>
                Product
            </Typography>

            <Card className='mb-12 overflow-hidden'>
                <img
                    alt='nature'
                    className='h-[32rem] w-full object-cover object-center'
                    src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80'
                />
            </Card>
            <Typography color='gray' className='font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                vel odio adipisci aperiam tempore dicta ipsa culpa obcaecati
                officiis veritatis facilis aliquid est animi reprehenderit eum
                sint reiciendis nisi repellendus?
            </Typography>
        </div>
    );
}

export default Product;
