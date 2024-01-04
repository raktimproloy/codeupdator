import React from 'react'
import AboutImage from "../../../../public/images/about.jpg"
import Image from 'next/image'

function index() {
  return (
    <>
      <div>
        <div>
          <Image src={AboutImage} width={1000} height={1000} alt='about' />
        </div>
        <div>
        <button className="btn">Button</button>
        </div>
      </div>
    </>
  )
}

export default index