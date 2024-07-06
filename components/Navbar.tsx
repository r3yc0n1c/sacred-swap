import React from 'react'
import logo from "@/public/logo-64x64.svg";
import Image from 'next/image';

function Navbar() {
    return (
        <nav className='h-20 flex justify-between items-center px-4 border-b border-neutral-400'>
            <div className='relative h-12 w-12'>
                <Image
                    src={logo}
                    alt="logo"
                    fill
                    className="object-cover"
                />
            </div>

            <div>
                
            </div>
        </nav>
    )
}

export default Navbar