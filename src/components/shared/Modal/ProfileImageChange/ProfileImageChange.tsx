import React from 'react'

function ProfileImageChange() {
  return (
    <>
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
    <div className="modal cursor-default" role="dialog">
    <div className="modal-box rounded">
    <div className="modal-action">
        <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
        </label>
        </div>
        <h4 className="font-bold text-xl text-center mb-3">Select Your Profile Image</h4>
        <input type="file" className="file-input file-input-bordered w-full" />
    </div>
    </div>
    </>
  )
}

export default ProfileImageChange