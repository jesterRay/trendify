"use client"
import Link from "next/link"
import Image from "next/image"
import {navLinks} from "../../constants/nav_links"
import { usePathname,useRouter } from "next/navigation"


export default function BottomNav(){
    const pathname = usePathname();
    const router = useRouter();
    return (
        <footer className="bg-black fixed bottom-0 left-0 w-full text-white md:hidden flex ">
            <div className="flex justify-evenly items-center w-full py-4">
                {
                    navLinks.map( (navLink,index) => {
                        const isActive = (pathname === navLink.url) || 
                                        (pathname.includes(navLink.url));
                        
                        return(
                            <Link href={navLink.url} key={`bNav-item-${index}`}
                            className={`flex flex-col items-center justify-center gap-2 ${isActive && "link-active-bottom"}`}>
                                <Image src={navLink.icon} alt={navLink.title}
                                    width={20} height={20}
                                />
                                <p className="text-sm hidden sm:block">{navLink.title}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </footer>
    )
}