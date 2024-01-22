import React from 'react'
import { About, Category, Contact, Home, Problem } from '@/store/icons/Icons'
import Styles from "./style.module.css"

function MobileMenu() {
  return (
    <div className='grid grid-cols-5 gap-3 md:hidden py-2 bg-white'>
        <div className={`flex justify-center border-r text-gray-700 ${Styles.iconStyle}`}>
            <Home/>
        </div>
        <div className={`flex justify-center border-r ${Styles.iconStyle}`}>
            <Category/>
        </div>
        <div className={`flex justify-center border-r ${Styles.iconStyle}`}>
            <Problem/>
        </div>
        <div className={`flex justify-center border-r ${Styles.iconStyle}`}>
            <About/>
        </div>
        <div className={`flex justify-center ${Styles.iconStyle}`}>
            <Contact/>
        </div>
    </div>
  )
}

export default MobileMenu