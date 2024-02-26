'use client'
import React, { useState } from "react";
import { WorldIc, LockOnlyMe } from "@/store/icons/Icons"
import Select from '@/components/shared/MultiSelect/Select'
// import TinyMCE from "./TinyMCE";
import dynamic from "next/dynamic";
const TinyMCE = dynamic(() => import('./TinyMCE'), {
    ssr: false
})


function AddProblem() {
    const [text, setText] = useState("")
    const [value, setValue] = useState("<p>TinyMCE Editor text</p>")
    return <>
        <div className="card w-full bg-base-100 shadow-md rounded">
            <label htmlFor="create_a_problem" className="card-body cursor-pointer rounded">
                <div className="flex space-x-3 items-center">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="h-10 w-10 rounded-full" />
                    <div className="textarea textarea-bordered w-full resize-none">
                        <div className="opacity-70">Post your problem.....</div>
                    </div>
                </div>
            </label>
        </div>


        <input type="checkbox" id="create_a_problem" className="modal-toggle" />
        <div className="modal" role="dialog">
            <div className="modal-box max-w-5xl rounded">
                <h1 className="md:text-xl font-semibold text-center mb-2">Create A Problem</h1>
                <hr></hr>
                <div className="flex flex-col my-3 space-x-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between space-y-10 md:space-x-2">

                        <div className="flex items-center space-x-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="h-10 w-10 rounded-full" />
                            <div className="font-semibold flex flex-col">
                                <span>Joshim Uddin</span>
                                <div className="">
                                    <select className="select select-bordered mt-1 min-h-0 h-7" defaultValue={"public"}>
                                        <option value="public" className='py-2'>
                                            {/* <span className="text-gray-500"><WorldIc/></span> */}
                                            Public
                                        </option>
                                        <option value="private" className='py-2'>
                                            {/* <span className="text-gray-500"><LockOnlyMe/></span> */}
                                            Private
                                        </option>
                                    </select>

                                </div>
                            </div>
                        </div>


                        <div className="my-2 w-1/2">
                            <span>Select Your Language</span>
                            <Select />
                        </div> </div>


                    <div className="mt-5">
                        {/* <textarea className="textarea textarea-bordered w-full resize-none" placeholder="Write your problem here......"></textarea> */}
                        <TinyMCE text={text} setText={setText} value={value} setValue={setValue} />
                    </div>



                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Image Upload</span>
                    </div>

                    <div className="w-full">
                        <label
                            className="flex justify-center w-full h-56 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <span className="font-medium text-gray-600">
                                    Drop files to Attach, or
                                    <span className="text-blue-600 underline">browse</span>
                                </span>
                            </span>
                            <input type="file" name="file_upload" className="hidden" />
                        </label>
                    </div>

                    <div className="grid grid-cols-3 gap-3 place-items-center">
                        <div className="py-5 w-fit">
                            <div className="p-2 mt-5 flex justify-end">
                                <button className="btn btn-sm btn-circle btn-ghost absolute bg-gray-50 hover:bg-gray-100 -mr-1 mt-3">✕</button>
                            </div>
                            <div className="w-48 h-52">
                                <img src="https://miracleio.me/assets/img/articles/create-a-custom-file-upload-component-with-react-for-nextjs/cover.png" className="h-full w-full object-cover rounded" />
                            </div>
                        </div>
                        <div className="py-5 w-fit">
                            <div className="p-2 mt-5 flex justify-end">
                                <button className="btn btn-sm btn-circle btn-ghost absolute bg-gray-50 hover:bg-gray-100 -mr-1 mt-3">✕</button>
                            </div>
                            <div className="w-48 h-52">
                                <img src="https://miracleio.me/assets/img/articles/create-a-custom-file-upload-component-with-react-for-nextjs/cover.png" className="h-full w-full object-cover rounded" />
                            </div>
                        </div>
                        <div className="py-5 w-fit">
                            <div className="p-2 mt-5 flex justify-end">
                                <button className="btn btn-sm btn-circle btn-ghost absolute bg-gray-50 hover:bg-gray-100 -mr-1 mt-3">✕</button>
                            </div>
                            <div className="w-48 h-52">
                                <img src="https://miracleio.me/assets/img/articles/create-a-custom-file-upload-component-with-react-for-nextjs/cover.png" className="h-full w-full object-cover rounded" />
                            </div>
                        </div>

                    </div>


                    <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary w-fit rounded my-2">Post Problem</button>
                    </div>

                </div>



            </div>
            <label className="modal-backdrop" htmlFor="create_a_problem">Close</label>
        </div>
    </>
}




export default AddProblem;