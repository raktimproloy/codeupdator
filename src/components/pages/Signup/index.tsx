'use client'
import { Signup } from '@/store/icons/Icons'
import React, { useState } from 'react'
import { fetchMainApi } from '@/utils/fetch/clientSideFetchApi'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
import ThirdPartyLogin from '@/components/shared/ThridPartyLogin/ThirdPartyLogin'

// Location add hoba
// portfolio add hoba
// bio add hoba


function Index() {
  const router = useRouter()
  const [cookie, setCookie] = useCookies(["_token"])
  const [signupDetails, setSignupDetails] = useState({
    full_name: "",
    username: "",
    email: "",
    password: ""
  })
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSignup = (e) => {
    e.preventDefault()
    if(signupDetails.full_name && signupDetails.username && signupDetails.email && signupDetails.password){
      if(signupDetails.password === confirmPassword){
        fetchMainApi({url: "/user/signup", method: "post", data:signupDetails})
        .then(res => {
          setCookie("_token",res.data.token)
          router.push("/")
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
  return (
    <div className='flex justify-center items-center h-screen -mt-20'>
      <div className="card md:max-w-2/3 bg-base-100 shadow p-5 rounded">
        <div className='flex justify-center items-center space-x-2 text-2xl'>
            <div>
               <Signup/>
            </div>
            <h1 className='font-semibold'>
              Signup
            </h1>
        </div>
            <form>
              <div className='grid grid-cols-2 gap-2'>
                <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Full Name</span>
                </div>
                <input 
                  type="text" 
                  placeholder="Type here" 
                  className="input input-bordered w-full rounded" 
                  required 
                  value={signupDetails.full_name} 
                  onChange={(e) => setSignupDetails(prevState => ({...prevState, full_name: e.target.value}))}
                />

                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Username</span>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Type here" 
                    className="input input-bordered w-full rounded" 
                    required
                    value={signupDetails.username} 
                    onChange={(e) => setSignupDetails(prevState => ({...prevState, username: e.target.value}))}
                  />
                </label>
              </div>
              <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input 
                type="text" 
                placeholder="Type here" 
                className="input input-bordered w-full rounded" 
                required
                value={signupDetails.email} 
                onChange={(e) => setSignupDetails(prevState => ({...prevState, email: e.target.value}))}
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
                  value={signupDetails.password} 
                  onChange={(e) => setSignupDetails(prevState => ({...prevState, password: e.target.value}))}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Confirm Password</span>
                </div>
                <input 
                  type="password" 
                  placeholder="********" 
                  className="input input-bordered w-full rounded" 
                  required
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
              <button className="btn w-full btn-primary mt-5 rounded" onClick={handleSignup}>Signup</button>
            </form>
        <div className="divider text-gray-600">OR</div>
        <ThirdPartyLogin/>
      </div>
    </div>
  )
}

export default Index