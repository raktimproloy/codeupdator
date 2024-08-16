import React from "react";
import Image from "next/image";
import DefaultProfileImage from "/public/images/default-profile.png";
import Link from "next/link";
import Interest from "@/components/shared/Interest"

function Top_rated({data}:any) {
  return (
    <>
      <div className="w-full card shadow rounded container p-2 my-3">
        <div className="flex flex-row justify-between">
          <div className="w-full flex flex-col">
            <div className="flex flex-row items-start">
            <Image src={data.profile_image || DefaultProfileImage} alt='' width={50} height={50} style={{borderRadius: "50%"}} />
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl ml-2">{data?.full_name}</h1>
                <Link href={"#"} className="font-semibold text-sm ml-2 top_rated_username">
                  @{data?.username}
                </Link>
              </div>

            </div>
            <Interest interest={data.interest} />
            {/* <div className="w-full flex space-x-1 mt-3">
              <span className="indicator-item indicator-top indicator-start badge badge-success text-white rounded">
                Node js
              </span>
              <span className="indicator-item indicator-top indicator-center badge badge-secondary rounded">
                PHP
              </span>
              <span className="indicator-item indicator-middle indicator-start badge badge-neutral rounded">
                Laravel
              </span>
              <span className="indicator-item indicator-middle indicator-center badge badge-warning rounded">
                HTML
              </span>
            </div> */}
          </div>
          <div className="bg-secondary px-5 rounded h-fit text-white">{data?.point}</div>
        </div>
      </div>
    </>
  );
}

export default Top_rated;
