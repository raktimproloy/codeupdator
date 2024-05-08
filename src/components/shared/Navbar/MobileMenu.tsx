import React from 'react'
import { About, Category, Contact, Home, Problem } from '@/store/icons/Icons'
import Styles from "./style.module.css"
import Link from 'next/link'

function MobileMenu() {
  return (
    <div className='grid grid-cols-5 gap-3 md:hidden py-2 bg-white'>
        <Link href={"/"} className={`flex justify-center border-r text-gray-700 ${Styles.iconStyle}`}>
            <Home/>
        </Link>
        <Link href={"/problem"} className={`flex justify-center border-r ${Styles.iconStyle}`}>
            <Category/>
        </Link>
        <Link href={"/top-rated"} className={`flex justify-center border-r ${Styles.iconStyle}`}>
            <Problem/>
        </Link>
        <Link href={"/about"} className={`flex justify-center border-r ${Styles.iconStyle}`}>
            <About/>
        </Link>
        <Link href={"/contact"} className={`flex justify-center ${Styles.iconStyle}`}>
            <Contact/>
        </Link>
    </div>
  )
}

export default MobileMenu