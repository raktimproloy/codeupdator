import Interest from '@/components/shared/Profile/Interest'
import React from 'react'

function ListCard() {
  return (
    <div className='flex items-center my-5 shadow rounded p-3'>
        <div className="avatar">
            <div className="w-20 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div className='ml-5'>
            <h1 className='font-bold text-2xl'>Joshim Uddin</h1>
            <p>@joshim_laravelest</p>
            <Interest/>
        </div>
    </div>
  )
}

export default ListCard