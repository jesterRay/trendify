"use client"

import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignOutButton } from '@clerk/nextjs';


export default function TopNav(){
    return (
        <nav className=" w-full flex justify-between bg-black text-white px-3 py-4 md:py-6 md:px-6">
            <Link href={'/home'} className='flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3'>
                <Image src={'/images/logo/logo_color.svg'} alt='Trendify'
                width={26} height={26}
                />
                <figcaption className='text-sm md:text-base font-medium tracking-widest hidden sm:block'>Trendify</figcaption>
            </Link>
            <div className=''>
                <SignedIn>
                    <SignOutButton>
                        <div>
                            <Image src={'/images/icons/logout.svg'} alt='logout' width={24} height={24}/>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </nav>
    )
}