'use client'
import React, { useState } from 'react'
import { Login } from '@/store/icons/Icons'
import Link from 'next/link'
import { FetchMainApi } from '@/utils/fetch/clientSideFetchApi';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import ThirdPartyLogin from '@/components/shared/ThridPartyLogin/ThirdPartyLogin';

function Index() {
  const [cookie, setCookie] = useCookies(["_token"])
  const router = useRouter()
  
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })

  const handleLogin = (e) => {
    e.preventDefault()
    FetchMainApi({url: "/user/login", method: "post", data:loginDetails})
    .then(res => {
      setCookie("_token",res.data.token, { path: '/' })
      router.push("/")
    })
    .catch(err => {
      console.log(err)
    })
  }
  
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
            <input 
              type="text" 
              placeholder="Type here" 
              className="input input-bordered w-full rounded" 
              required
              value={loginDetails.email} 
              onChange={(e) => setLoginDetails(prevState => ({...prevState, email: e.target.value}))}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Passowrd</span>
            </div>
            <input 
              type="password" 
              placeholder="********" 
              className="input input-bordered w-full rounded" 
              required
              value={loginDetails.password} 
              onChange={(e) => setLoginDetails(prevState => ({...prevState, password: e.target.value}))}
            />
          </label>
        <button className="btn w-full btn-primary mt-5 rounded" onClick={handleLogin}>Login</button>
            </form>
        <Link href={"/forget-password"} className='my-1 text-gray-600 hover:text-blue-600 hover:underline transition-all duration-500 mt-3'>Forget Password</Link>
        
        <div className="divider text-gray-600">OR</div>
        <ThirdPartyLogin/>
      </div>
    </div>
  )
}

export default Index