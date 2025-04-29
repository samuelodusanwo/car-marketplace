import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react';
import { Button } from '../ui/button';

function Header() {
    const { user, isSignedIn } = useUser()

    return (
        <div className='bg-white w-full flex justify-between items-center shadown-xl md:shadow-sm p-5'>
            <img src="/vite.svg" alt="logo" width={50} height={50} />

            <ul className='hidden md:flex gap-16'>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
            </ul>

            {  
                isSignedIn ?
                <div className='flex items-center gap-5'>
                    <UserButton />
                    <Button>Submit List</Button>
                </div>
                :
                <Button>Submit List</Button>
            }
        </div>
    )
}

export default Header;