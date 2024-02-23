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
        {/* The button to open modal */}
<label htmlFor="my_modal_7" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <label htmlFor="my_modal_7" className="btn">Close!</label>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
    </>
}

export default AddProblem;