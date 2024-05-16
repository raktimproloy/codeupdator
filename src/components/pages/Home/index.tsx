import React from "react";
import Card1 from "@/components/shared/PostCard/Card1";
import RightSection from "@/components/shared/RightSection/RightSection";
import PostPlaceholder from "@/components/shared/Placeholder/PostPlaceholder";
import { fetchDataFromServer } from "@/utils/fetch/serverSideFetchApi";

export default async function index() {
  const BASE_MAIN_API = process.env.NEXT_PUBLIC_MAIN_API
  const posts = await fetchDataFromServer(`${BASE_MAIN_API}/update-post/get`);
  return (
    <>
      <div className="max-w-6xl flex flex-row space-x-5 mx-auto py-5">
        <div className="w-full md:w-4/6">
          {/* Left Section */}
          {
            posts && posts.length > 0 && posts.map((post:any, index:any) => 
              post.status === "publish" && <Card1 key={post.id} data={post} count={index} />
            )
          }
          {/* <PostPlaceholder/> */}
        </div>

        {/* Right Section */}
        <RightSection/>
      </div>
    </>
  );
}
