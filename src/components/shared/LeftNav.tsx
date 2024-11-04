"use client"
import Link from "next/link"
import Image from "next/image"
import {navLinks} from "../../constants/nav_links"
import { SignedIn, SignOutButton } from '@clerk/nextjs';
import { usePathname,useRouter } from "next/navigation"


export default function LefNav(){
    const pathname = usePathname();
    const router = useRouter();
    return (
        <aside className="bg-black w-fit sticky left-0 text-white hidden md:flex flex-col justify-between py-3 ps-4 pe-4 lg:ps-6 lg:pe-6">
            <div className=" flex flex-col py-4 gap-8 lg:w-36 xl:w-44">
                {
                    navLinks.map( (navLink,index) => {
                        const isActive = (pathname === navLink.url) || 
                                        (pathname.includes(navLink.url));
                        
                        return(
                            <Link href={navLink.url} key={`bNav-item-${index}`}
                            className={`flex items-center w-full justify-center lg:justify-start gap-2 lg:gap-4  ${isActive && "link-active-bottom"}`}>
                                <Image src={navLink.icon} alt={navLink.title}
                                    width={24} height={24}
                                />
                                <p className="hidden lg:block">{navLink.title}</p>
                            </Link>
                        )
                    })
                }
            </div>
            <div className=" flex flex-col py-4 gap-8 lg:w-36 xl:w-44">
                <SignedIn>
                    <SignOutButton>
                        <div className="flex items-center w-full justify-center lg:justify-start gap-2 lg:gap-4">
                            <Image src={'/images/icons/logout.svg'} alt='logout' width={24} height={24}/>
                            <p className="hidden lg:block">Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </aside>        
    )
}