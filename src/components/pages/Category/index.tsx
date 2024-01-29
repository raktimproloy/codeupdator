import React from 'react'
import Card1 from "@/components/shared/PostCard/Card1";
import RightSection from "@/components/shared/RightSection/RightSection";
import Image from 'next/image';

function index() {
  return (
    <div className="max-w-6xl flex flex-row space-x-5 mx-auto py-5">

    <div className="w-full md:w-4/6">
      <div className="hero h-80 bg-base-200 rounded mb-4">
        <div className="hero-content flex-col lg:flex-row">
          <Image src="/node-js.png" width={500} height={500} alt="category" className='w-40' />
          <div>
            <h1 className="text-5xl font-bold text-center">NODE JS</h1>
            <p className="py-6 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div className='text-center flex items-center justify-between'>
              <div>
                <div className="stat-title text-xl">Interest</div>
                <div className="stat-value">12k</div>
              </div>
              <select className="select select-bordered w-2/4">
                <option disabled >Choose Version</option>
                <option>21.2.0</option>
                <option>21.1.0</option>
                <option>20.8.1</option>
                <option>20.7.5</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Left Section */}
      <Card1 />
    </div>

    {/* Right Section */}
    <RightSection/>
  </div>
  )
}

export default index