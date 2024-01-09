import Interest from '@/components/shared/Profile/Interest'
import { Location, Email } from '@/store/icons/Icons'
import React from 'react'

function ListCard() {
  return (
    <>
      <div className='shadow rounded p-3'>
        <div className='flex items-center'>
            <div className="avatar">
                <div className="w-20 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className='ml-5'>
                <h1 className='font-bold text-2xl'>Joshim Uddin</h1>
                <p>@joshim_laravelest</p>
                <div className='flex mt-2 items-center text-gray-600'>
                  <Location/>
                  <span className='ml-1'>Bangladesh</span>
                </div>
                <div className='hidden'>
                  <Interest/>
                </div>
            </div>
        </div>
        <div className='mt-3'>
          <p className='mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
          <Interest/>
        </div>
      </div>
    </>
  )
}

export default ListCard