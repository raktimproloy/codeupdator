import React from "react";
import { ThreeDotVerticale } from "@/components/store/icons/ThreeDotVerticale";

function index() {
  return (
    <>
      <div className="flex">
        <div className="w-full h-fit md:w-4/6 shadow rounded p-3">
        <div className="flex justify-between space-x-5">
            <div className="flex items-center space-x-2">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg"
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="text-gray-600 font-semibold flex flex-col  justify-center">
                <span>Getintocode</span>
                <span className="text-xs">19 Nov 2023</span>
              </div>
            </div>

          <div className="">
            <ThreeDotVerticale />
          </div>
        </div>
        
        <div className="py-2 text-gray-600">
        Notable Changes
This release marks the transition of Node.js 20.x into Long Term Support {'('}LTS{')'} with the codename {"'"}Iron{"'"}. The 20.x release line now moves into {"'"}Active LTS{"'"} and will remain so until October 2024. After that time, it will move into Maintenance until end of life in April 2026.

Known issue
Collecting code coverage via the NODE_V8_COVERAGE environment variable may lead to a hang. This is not thought to be a regression in Node.js 20 {'('}some reports are on Node.js 18{')'}. For more information, including some potential workarounds, see issue #49344.
        </div>

        </div>
        <div className="w-2/12 px-5 hidden md:flex">
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </div>
      </div>
    </>
  );
}

export default index;
