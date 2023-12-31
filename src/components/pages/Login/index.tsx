import React from 'react'
import { Facebook, Google, Github, Login } from '@/store/icons/Icons'
import Link from 'next/link'

function index() {
  return (
    <div className='flex justify-center items-center h-screen -mt-20'>
      <div className="card w-96 bg-base-100 shadow p-5 rounded">
        <div className='flex justify-center items-center space-x-2 text-2xl'>
            <div className='text-gray-600'>
               <Login/>
            </div>
            <h1 className='font-semibold text-gray-600'>
              Login
            </h1>
        </div>
            <form>
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
        <button className="btn w-full btn-primary mt-5 rounded">Login</button>
            </form>
        <Link href={"/forget-password"} className='my-1 text-gray-600 hover:text-blue-600 hover:underline transition-all duration-500 mt-3'>Forget Password</Link>
        
        <div className="divider text-gray-600">OR</div>
        <div className='flex flex-col space-y-3 justify-between items-center'>
        <button className="btn w-full rounded">
        <Google/>
          Login with Google
        </button>
        <button className="btn w-full rounded">
        <Facebook/>
          Login with Facebook
        </button>
        <button className="btn w-full rounded">
        <Github/>
          Login with Github
        </button>
        </div>
      </div>
    </div>
  )
}

export default index