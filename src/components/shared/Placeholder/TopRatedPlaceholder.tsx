import { Location } from '@/store/icons/Icons'
import React from 'react'
import Interest from '../Profile/Interest'

function ProblemCardPlaceholder() {
  return (
    <div className='shadow rounded p-3'>
        <div className='flex items-center'>
            <div className="avatar">
                {/* <div className="w-20 rounded-full"> */}
                <div className="skeleton w-20 h-20 rounded-full shrink-0"></div>
                {/* </div> */}
            </div>
            <div className='ml-5'>
                <div className="skeleton h-5 w-40"></div>
                <div className="skeleton h-4 w-36 mt-1"></div>
                <div className='flex mt-2 items-center text-gray-600'>
                  <div className="skeleton h-4 w-20 mt-1"></div>
                </div>
                <div className='hidden'>
                <div className="flex space-x-1">
                  <div className="skeleton h-4 w-36 mt-1"></div>
                  <div className="skeleton h-4 w-36 mt-1"></div>
                  <div className="skeleton h-4 w-36 mt-1"></div>
                  <div className="skeleton h-4 w-36 mt-1"></div>
                  <div className="skeleton h-4 w-36 mt-1"></div>
                </div>
                </div>
            </div>
        </div>
        <div className='mt-3'>
        <div className="skeleton h-4 w-full mb-3"></div>
        <div className="skeleton h-4 w-1/2 mb-3"></div>
          <div className="flex space-x-1">
            <div className="skeleton h-4 w-36 mt-1"></div>
            <div className="skeleton h-4 w-36 mt-1"></div>
            <div className="skeleton h-4 w-36 mt-1"></div>
            <div className="skeleton h-4 w-36 mt-1"></div>
            <div className="skeleton h-4 w-36 mt-1"></div>
          </div>
        </div>
      </div>
  )
}

export default ProblemCardPlaceholder