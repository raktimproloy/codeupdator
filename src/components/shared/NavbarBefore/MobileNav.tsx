import React from 'react'
import { Home, Category, Problem, About, Contact } from '@/store/icons/Icons'
import Styles from "./style.module.css"
import Dropdown from './Dropdown'

function MobileNav() {
  return (
    <>
        <div className=''>
            <div className='grid grid-cols-5 gap-3 md:hidden px-2'>
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
        </div>
    </>
  )
}

export default MobileNav