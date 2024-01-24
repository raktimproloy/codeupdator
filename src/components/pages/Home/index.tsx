import React from "react";
import Card1 from "@/components/shared/PostCard/Card1";
import Footer from '@/components/shared/Footer';

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
        <div className="hidden md:flex items-center border-t border-gray-500">
          <Footer/>
        </div>
        <div className="ml-5">
            <ul className="flex flex-row list-disc justify-between text-sm">
              <li>Terms & Confition</li>
              <li>Privacy & Policy</li>
              <li>About </li>
              <li>Contact</li>
            </ul>
        </div>
        </div>


      </div>
    </>
  );
}

export default index;
