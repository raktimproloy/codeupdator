import { Forget } from '@/store/icons/Icons'
import React from 'react'

function index() {
  return (
    <div className='flex justify-center items-center h-screen -mt-20'>
      <div className="card w-96 bg-base-100 shadow p-5 rounded">
        <div className='flex justify-center items-center space-x-2 text-2xl'>
            <div className='text-gray-600'>
               <Forget/>
            </div>
            <h1 className='font-semibold text-gray-600'>
              Forget Password
            </h1>
        </div>
            <form>
            <label className="form-control w-full mt-5">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full rounded" required/>
          </label>
        <button className="btn w-full btn-primary mt-5 rounded">Send</button>
            </form>
      </div>
    </div>
  )
}

export default index