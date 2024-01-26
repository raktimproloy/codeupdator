import React from "react";
import Image from "next/image";

function Top_rated() {
  return (
    <>
      <div className="w-full card shadow rounded container p-2 my-3">
        <div className="flex flex-row justify-between">
          <div className="w-full flex flex-col">
            <div className="flex flex-row items-start">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                className="rounded-full w-14 h-14"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl ml-2">Joshim Uddin</h1>
                <h6 className="font-semibold text-sm ml-2 top_rated_username">
                  @Joshim_laravelest
                </h6>
              </div>

            </div>
            <div className="w-full flex space-x-1 mt-3">
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
            </div>
          </div>
          <div className="bg-secondary px-5 rounded h-fit text-white">8.5</div>
        </div>
      </div>
    </>
  );
}

export default Top_rated;
