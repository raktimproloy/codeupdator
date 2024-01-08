import React from "react";
import Card1 from "@/components/shared/PostCard/Card1"

function index() {
  return (
    <>
      <div className="flex py-5">
        {/* Left Section */}
        <Card1/>

        {/* Right Section */}
        <div className="w-2/6 px-5 hidden md:flex whitespace-normal">
          <div className="w-100">
            <div className="border-2">
              <h5>Login For Get Update First</h5>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
