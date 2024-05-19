import React from 'react'
import Card1 from "@/components/shared/PostCard/Card1";
import RightSection from "@/components/shared/RightSection/RightSection";
import AddProblem from '@/components/pages/Problem/AddProblem'
import ProblemCard from './Card/ProblemCard';
import { fetchDataFromServer } from '@/utils/fetch/serverSideFetchApi';

const length = [
  1, 2, 3, 4, 5
]
async function index() {
  const BASE_MAIN_API = process.env.NEXT_PUBLIC_MAIN_API
  const problems = await fetchDataFromServer(`${BASE_MAIN_API}/problem-post/1`);
  return (
    <>
    <div className="max-w-6xl flex flex-row space-x-5 mx-auto py-5">
      <div className="w-full md:w-4/6">
        <AddProblem/>

        {
          problems && problems.length > 0 && problems.map((problem) => 
            <ProblemCard data={problem} key={problem.id} />
          )
        }

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