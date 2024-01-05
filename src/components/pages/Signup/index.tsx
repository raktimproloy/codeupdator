import { Facebook, Github, Google, Signup } from '@/store/icons/Icons'
import React from 'react'

function index() {
  return (
    <div className='flex justify-center items-center h-screen -mt-20'>
      <div className="card w-1/2 bg-base-100 shadow p-5 rounded">
        <div className='flex justify-center items-center space-x-2 text-2xl'>
            <div className='text-gray-600'>
               <Signup/>
            </div>
            <h1 className='font-semibold text-gray-600'>
              Signup
            </h1>
        </div>
            <form>
              <div className='grid grid-cols-2 gap-2'>
                <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Full Name</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full rounded" required/>
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Username</span>
                  </div>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full rounded" required/>
                </label>
              </div>
              <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full rounded" required/>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Passowrd</span>
                </div>
                <input type="password" placeholder="********" className="input input-bordered w-full rounded" required/>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Confirm Password</span>
                </div>
                <input type="password" placeholder="********" className="input input-bordered w-full rounded" required/>
              </label>
              <button className="btn w-full btn-primary mt-5 rounded">Signup</button>
            </form>
        <div className="divider text-gray-600">OR</div>
        <div className='flex flex-col space-y-3 justify-between items-center'>
        <button className="btn w-full rounded">
        <Google/>
          Signup with Google
        </button>
        <button className="btn w-full rounded">
        <Facebook/>
        Signup with Facebook
        </button>
        <button className="btn w-full rounded">
        <Github/>
        Signup with Github
        </button>
        </div>
      </div>
    </div>
  )
}

export default index