import React from 'react'
import ContactUsPhoto from "/public/images/contact_us.svg";
import Image from "next/image";


function index() {
  return (
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
    <div className="text-center lg:text-left">
    <Image src={ContactUsPhoto} width={1080} height={1920} alt="logo" />

    </div>
    <div className="rounded shrink-0 w-full max-w-sm shadow bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Emain" className="rounded input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phon Number (Optional)</span>
          </label>
          <input type="text" placeholder="Number" className="rounded input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea placeholder="Your message" className="rounded textarea textarea-bordered" required></textarea>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default index