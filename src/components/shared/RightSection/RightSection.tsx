'use client'
import React, { useEffect, useState } from 'react'
import Top_rated from '../Card/Top_rated';
import Button from './Button';
import HalfFooter from '../Footer/HalfFooter';
import Styles from "./style.module.css"

function RightSection() {

  return (
    <div className={`w-2/6 hidden md:block`}>
          <div  className={`fixed top-26 w-[23.5rem] h-[70vh] overflow-y-scroll overflow-x-hidden ${Styles.scrollbar}`}>
          <div className="card w-96 shadow rounded">
          <div className="card-body">
            <h2 className="card-title">Code Bliss Awaits! Join Now.</h2>
            <p className='signup_notice'>Join us for problem-solving mastery! Sign up for updates on React, Node.js, PHP, and more, and get ready to conquer coding challenges.</p>
            <div className="card-actions justify-end mt-3">
              <Button/>
            </div>
          </div>
        </div>

        <div className='card shadow rounded my-5 p-5'>
          <div className='font-semibold text-xl'>Develper of this week:</div>
          <Top_rated/>
          <Top_rated/>
          <Top_rated/>
        </div>

          </div>
          <HalfFooter/>
        </div>
  )
}

export default RightSection