'use client'
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Quill = dynamic(() => import('./Quill'), {
    ssr: false
})
const ImageUpload = dynamic(() => import('./ImageUpload'), {
    ssr: false
})
const MultiSelect = dynamic(() => import('@/components/shared/MultiSelect/NormalSelect'), {
    ssr: false
})


function AddProblem() {
    const [value, setValue] = useState(``)

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
            <div className="px-8">
                <span>Filter</span>
                <MultiSelect/>
            </div>
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
                            <MultiSelect />
                        </div> </div>


                    <div className="mt-5">
                        <Quill value={value} setValue={setValue} />
                    </div>
                    <ImageUpload/>

                    


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