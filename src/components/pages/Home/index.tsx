import React from "react";
import Card1 from "@/components/shared/PostCard/Card1";

function index() {
  return (
    <>
      {/* <div className="max-w-6xl flex flex-row space-x-5 pt-5 m-auto justify-around"> */}
      <div className="max-w-6xl flex flex-row space-x-5 m-auto py-5">

        <div className="m-auto w-4/6">
          {/* Left Section */}
          <Card1 />
        </div>


        {/* Right Section */}
        <div className="w-2/6">
        <div className="hidden md:flex">
          <div className="">
            <div className="border-2">
              <h5>Login For Get Update Firstsdfdfdf</h5>
              <button>Login</button>
            </div>
          </div>
        </div>
        </div>


      </div>
    </>
  );
}

export default index;
