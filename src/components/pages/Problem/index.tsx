import React from 'react'
import Card1 from "@/components/shared/PostCard/Card1";
import RightSection from "@/components/shared/RightSection/RightSection";
import AddProblem from '@/components/pages/Problem/AddProblem'
import ProblemCard from './ProblemCard';

const length = [
  1, 2, 3, 4, 5
]
function index() {
  return (
    <>
    <div className="max-w-6xl flex flex-row space-x-5 mx-auto py-5">
      <div className="w-full md:w-4/6">
        <AddProblem/>




<ProblemCard/>




        {/* Left Section */}
        {/* {length.map((num, index) =>
        <Card1 key={index} count={index} />
        )} */}




      </div>

      {/* Right Section */}
      <RightSection/>
    </div>
  </>
  )
}

export default index