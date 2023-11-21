import React from 'react'
import { Home, Category, Problem, About, Contact } from '@/store/icons/Icons'
import Styles from "./style.module.css"
import Dropdown from './Dropdown'

function MobileNav() {
  return (
    <>
        <div className='bg-gray-500'>
            <div className='grid grid-cols-5 md:hidden'>
                <div className={`flex justify-center border-2 py-3 ${Styles.iconStyle}`}>
                    <Home/>
                </div>
                <div className={`flex justify-center border-2 py-3 ${Styles.iconStyle}`}>
                    <Category/>
                </div>
                <div className={`flex justify-center border-2 py-3 ${Styles.iconStyle}`}>
                    <Problem/>
                </div>
                <div className={`flex justify-center border-2 py-3 ${Styles.iconStyle}`}>
                    <About/>
                </div>
                <div className={`flex justify-center border-2 py-3 ${Styles.iconStyle}`}>
                    <Contact/>
                </div>
            </div>
        </div>
    </>
  )
}

export default MobileNav