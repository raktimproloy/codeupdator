'use client'
import React, { useRef} from 'react'
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

function ProfileImageChange() {
  const cropperRef = useRef<ReactCropperElement>(null);
  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      // console.log(cropper.getCroppedCanvas().toDataURL());
    }
  };
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
        <div className='w-full h-96 relative mt-5'>
        <Cropper
          src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
          style={{ height: 300, width: "100%" }}
          // Cropper.js options
          initialAspectRatio={1}
          guides={false}
          crop={onCrop}
          ref={cropperRef}
        />
        </div>
    </div>
    </div>
    </>
  )
}

export default ProfileImageChange