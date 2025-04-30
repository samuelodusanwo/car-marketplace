import React from 'react'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

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
                    <Link to='/profile'>
                        <Button>Submit List</Button>
                    </Link>
                </div>
                :
                <div className='flex gap-2 items-center'>
                    <SignInButton mode='modal'>
                        <Button>Sign In</Button>
                    </SignInButton>
                    <SignInButton mode='modal'>
                        <Button>Submit List</Button>
                    </SignInButton>
                </div>
            }
        </div>
    )
}

export default Header;