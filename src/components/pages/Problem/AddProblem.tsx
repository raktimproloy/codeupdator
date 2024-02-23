import React from "react";

function AddProblem() {
    return <>
        <div className="card w-full bg-base-100 shadow-md rounded">
        <div className="card-body">
            <div className="flex space-x-3 items-center">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="h-10 w-10 rounded-full"/>
                <textarea className="textarea textarea-bordered w-full resize-none" placeholder="Write your problem here......"></textarea>
            </div>
        </div>
        </div>

    </>
}

export default AddProblem;