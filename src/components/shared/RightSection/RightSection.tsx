import React from 'react'
import Footer from "@/components/shared/Footer";

function RightSection() {
  return (
    <div className="w-2/6 hidden md:block">
          <div  className="fixed top-26 w-[23.5rem] h-[20rem] bg-green-500"></div>
          <div className="fixed bottom-0 w-[23.5rem]">
            <div className="hidden md:flex items-center border-t border-gray-500">
              <Footer />
            </div>
            <div className="ml-5">
              <ul className="flex flex-row list-disc justify-between text-sm list-none">
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