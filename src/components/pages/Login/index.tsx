import React from 'react'
import { Facebook, Google, Github } from '@/store/icons/Icons'

function index() {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className="card w-96 bg-base-100 shadow-xl p-5">
        <h1 className='text-center'>LOGIN</h1>
        <div className='my-3'>
          <label htmlFor="email" className='text-left'>Email</label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <div className='my-3'>
        <label htmlFor="password" className='text-start'>Password</label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <button className="btn btn-wide w-full btn-info">Wide</button>
        <div className='flex justify-between items-center'>
        <button className="btn btn-outline btn-error mt-3">
          Google
          <Google/>
        </button>
        <button className="btn btn-outline btn-primary mt-3">
          Facebook
          <Facebook/>
        </button>
        <button className="btn btn-outline btn-dark mt-3">
          Github
          <Github/>
        </button>
        </div>
      </div>
    </div>
  )
}

export default index