'use client'
import React from "react";
import { WorldIc, LockOnlyMe } from "@/store/icons/Icons"
import Select from '@/components/shared/MultiSelect/Select'


function AddProblem() {
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
                                <div className="h-5 w-10">
                                    <select className="select">
                                        <option className="flex items-center">
                                            {/* <span className="text-gray-500"><WorldIc/></span> */}
                                            <span>Public</span>
                                        </option>
                                        <option className="flex items-center">
                                            {/* <span className="text-gray-500"><LockOnlyMe/></span> */}
                                            <span>Only me</span>
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
                        <textarea className="textarea textarea-bordered w-full resize-none" placeholder="Write your problem here......"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-fit rounded my-2">Create</button>

                </div>



            </div>
            <label className="modal-backdrop" htmlFor="create_a_problem">Close</label>
        </div>
    </>
}




export default AddProblem;