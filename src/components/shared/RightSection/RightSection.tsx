import React from 'react'
import Footer from "@/components/shared/Footer";
import Top_rated from '../Card/Top_rated';

function RightSection() {
  return (
    <div className="w-2/6 hidden md:block">
          <div  className="fixed top-26 w-[23.5rem] h-[20rem]">
          <div className="card w-96 shadow rounded">
          <div className="card-body p-4">
            <h2 className="card-title">Code Bliss Awaits! Join Now.</h2>
            <p className='signup_notice'>Join us for problem-solving mastery! Sign up for updates on React, Node.js, PHP, and more, and get ready to conquer coding challenges.</p>
            <div className="card-actions justify-end mt-3">
              <button className="w-full btn btn-primary rounded">Sign up now!</button>
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
          <div className="fixed bottom-5 w-[23.5rem]">
            <div className="hidden md:flex items-center border-t border-gray-500">
              <Footer />
            </div>
            <div className="ml-5 mt-3">
              <ul className="flex flex-row list-disc justify-between text-sm">
                <li>Terms & Condition</li>
                <li>Privacy & Policy</li>
                <li>About </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default RightSection