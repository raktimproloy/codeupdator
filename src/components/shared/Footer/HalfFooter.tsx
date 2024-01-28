import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import IconLogo from "/public/images/logoIcon.svg"

function HalfFooter() {
  return (
    <div className="fixed bottom-5 w-[23.5rem]">
        <div className="hidden md:flex items-center border-t border-gray-500">
        <footer className="footer pt-4 text-base-content border-base-300 max-w-screen-xl m-auto flex flex-col">
            <aside className="items-center grid-flow-col">
                <Image src={IconLogo} width={250} height={250} alt='logo' className='w-7 h-7' />
                <p>CodeStackFlow.</p>
            </aside> 
        </footer>
        </div>
        <div className="ml-5 mt-3">
            <ul className="flex flex-row list-disc justify-between text-sm">
            <li><Link href={"/terms-and-condition"}>Terms & Condition</Link></li>
            <li><Link href={"/privacy-and-policy"}>Privacy & Policy</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default HalfFooter