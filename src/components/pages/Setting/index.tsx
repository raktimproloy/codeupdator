'use client'
import React, { useEffect, useState } from 'react'
import Select from '@/components/shared/MultiSelect/Select'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { FetchMainApi } from '@/utils/fetch/clientSideFetchApi'
import { useCookies } from 'react-cookie'


function Index() {
  const [settingTab, setSettingTab] = useState(1)
  const [isClient, setIsClient] = useState(false)

  const [cookie, setCookie] = useCookies(["_token"]);
  const header = {
    'Authorization': `Bearer ${cookie._token}`
  };

  useEffect(() => {
    setIsClient(true)
  }, [])
  const profile = useSelector((state:any) => state.profile)
  const [profileData, setProfileData] = useState<any>()

  useEffect(() => {
    setProfileData(profile)
  }, [profile])

  const handleUpdateProfile = (e:any) => {
    e.preventDefault()
    FetchMainApi({url: `/user/update/${profileData.id}`, method:"put", data:profileData, header:header})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  if(isClient){
    return (
      <>
        <div className='max-w-6xl m-auto px-5 mt-[100px]'>
          <div className="md:flex">
            <ul className="flex-column space-y space-y-4 text-sm font-medium md:me-4 mb-4 md:mb-0">
              <li onClick={() => setSettingTab(1)}>
                <a className={`inline-flex items-center px-4 py-3 rounded-lg  w-full  ${settingTab === 1 ? "bg-base-300" : "bg-base-200"}`}>
                  <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                  </svg>
                  Settings
                </a>
              </li>
              <li onClick={() => setSettingTab(2)}>
                <a className={`inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900  hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white  ${settingTab === 2 ? "bg-base-300" : "bg-base-200"}`}>
                  <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" /></svg>
                  Privacy
                </a>
              </li>
            </ul>
            <div className={`p-6 text-medium shadow border border-base-300 rounded-lg w-full ${settingTab === 1 ? "block" : "hidden"}`}>
              <h3 className="text-lg font-bold mb-2">Settings:</h3>
  
              <div className="grid grid-cols-1 px-4 xl:grid-cols-3 xl:gap-4">
                <div className="mb-4 col-span-full xl:mb-2">
                </div>
                {/* Right Content */}
                <div className="col-span-full xl:col-auto">
                  <div className="p-4 mb-4 shadow border border-base-300 rounded-lg 2xl:col-span-2 sm:p-6">
                    <div className="flex flex-col justify-center items-center space-x-4  2xl:space-x-4">
                    <Image src={profileData?.profile_image ? profileData?.profile_image : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} width={500} height={500} alt="profile" className='mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0 rounded-full' />
                    </div>
                  </div>
  
                  <div className="p-4 mb-4 shadow border border-base-300 rounded-lg 2xl:col-span-2">
                    <div className="flow-root">
                      <h3 className="text-xl font-semibold">
                        Bio:
                      </h3>
                      <ul className="divide-y">
                        <li className="py-4">
  
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="bio"
                            className="block mb-2 text-sm font-medium"
                          >
                          </label>
                          <textarea id="bio" className="textarea textarea-bordered w-full mb-2" placeholder="Bio" value={profileData?.bio} 
                            onChange={(e) => 
                              setProfileData({...profileData, bio: e.target.value})
                            }></textarea>
                        </div>
  
                          <button
                            className="btn btn-primary mb-5"
                            type="submit"
                            onClick={handleUpdateProfile}
                          >
                            Save all
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
  
  
  
  
  
                  <div className="p-4 mb-4 shadow border border-base-300 rounded-lg 2xl:col-span-2">
                    <div className="flow-root">
                      <h3 className="text-xl font-semibold">
                        Interests:
                      </h3>
                      <ul className="divide-y">
                        <li className="py-4">
                          <div className="mb-3 w-full flex space-x-1 mt-3">
                            <span className="indicator-item indicator-top indicator-start badge badge-success text-white rounded">Node js</span>
                            <span className="indicator-item indicator-top indicator-center badge badge-secondary rounded">PHP</span>
                            <span className="indicator-item indicator-middle indicator-start badge badge-neutral rounded">Laravel</span>
                            <span className="indicator-item indicator-middle indicator-center badge badge-warning rounded">HTML</span></div>
                          <div>
                            <span>Select Your Language</span>
                            <Select />
                          </div>
  
                          <button
                            className="btn btn-primary mb-5"
                            type="submit"
                          >
                            Save all
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
  
  
  
                </div>
                <div className="col-span-2">
                  <div className="p-4 mb-4 shadow border border-base-300 rounded-lg 2xl:col-span-2">
                    <h3 className="mb-4 text-xl font-semibold">
                      General information
                    </h3>
                    <form action="#">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block mb-2 text-sm font-medium"
                          >
                            First Name
                          </label>
                          <input type="text" id='first-name' placeholder="Your Full Name" className="input input-bordered w-full max-w-xs" value={profileData?.full_name} 
                            onChange={(e) => 
                              setProfileData({...profileData, full_name: e.target.value})
                            } />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium"
                          >
                            Username
                          </label>
                          <input type="text" id='username' placeholder="joshim_laravelest" className="input input-bordered w-full max-w-xs" value={profileData?.username} 
                            onChange={(e) => 
                              setProfileData({...profileData, username: e.target.value})
                            } />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium"
                          >
                            Email
                          </label>
                          <input type="text" id='email' placeholder="JoshimUddin8212@gmail.com" className="input input-bordered w-full max-w-xs" disabled value={profileData?.email} />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="portfolio"
                            className="block mb-2 text-sm font-medium"
                          >
                            Portfolio
                          </label>
                          <input type="text" id='portfolio' placeholder="Porfolio" className="input input-bordered w-full max-w-xs" value={profileData?.portfolio} 
                            onChange={(e) => 
                              setProfileData({...profileData, portfolio: e.target.value})
                            } />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="location"
                            className="block mb-2 text-sm font-medium"
                          >
                            Your Country
                          </label>
                          <input type="text" id='location' placeholder="Your Country" className="input input-bordered w-full max-w-xs" value={profileData?.location} 
                            onChange={(e) => 
                              setProfileData({...profileData, location: e.target.value})
                            } />
                        </div>
                        <div className="col-span-6 sm:col-full">
                          <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={handleUpdateProfile}
                          >
                            Save all
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
  
  
  
                  <div className="p-4 mb-4 shadow border border-base-300 rounded-lg 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <h3 className="mb-4 text-xl font-semibold dark:text-white">
                      Password information
                    </h3>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="old_pass"
                          className="block mb-2 text-sm font-medium"
                        >
                          Current Password
                        </label>
                        <input type="password" id='old_pass' placeholder="******" className="input input-bordered w-full max-w-xs" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="new_pass"
                          className="block mb-2 text-sm font-medium"
                        >
                          New Password
                        </label>
                        <input type="text" id='new_pass' placeholder="******" className="input input-bordered w-full max-w-xs" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="confm_pass"
                          className="block mb-2 text-sm font-medium"
                        >
                          Confirm Password
                        </label>
                        <input type="text" id='confm_pass' placeholder="******" className="input input-bordered w-full max-w-xs" />
                      </div>
                      <div className="col-span-6 sm:col-full">
                        <button
                          className="btn btn-primary"
                          type="submit"
                        >
                          Save all
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 mb-4 shadow border border-base-300 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="flow-root">
                      <h3 className="text-xl font-semibold">Sessions</h3>
                      <ul className="divide-y">
                        <li className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-base font-semibold truncate">
                                California 123.123.123.123
                              </p>
                              <p className="text-sm font-normal truncate">
                                Chrome on macOS
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-base font-semibold truncate">
                                California 123.123.123.123
                              </p>
                              <p className="text-sm font-normal truncate">
                                Chrome on macOS
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
  
  
  
            </div>
            <div className={`p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full ${settingTab === 2 ? "block" : "hidden"}`}>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>
              <p className="mb-2">This is some placeholder content the Profile t associated content, clicking another tab will toggle the visibility of this one for the next.</p>
              <p>The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
          </div>
  
        </div>
  
  
      </>
    )
  }
}

export default Index