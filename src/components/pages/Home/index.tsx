import React from "react";
import Card1 from "@/components/shared/PostCard/Card1";
import Footer from "@/components/shared/Footer";
import RightSection from "@/components/shared/RightSection/RightSection";

function index() {
  return (
    <>
      <div className="max-w-6xl flex flex-row space-x-5 mx-auto py-5">
        <div className="w-full md:w-4/6">
          {/* Left Section */}
          <Card1 />
        </div>

        {/* Right Section */}
        <RightSection/>
      </div>
    </>
  );
}

export default index;
