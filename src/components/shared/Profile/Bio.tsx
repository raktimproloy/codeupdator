import React from 'react'
import Interest from './Interest'

function Bio() {
  return (
    <>
        <div className='mb-5'>
            <h1 className='font-bold text-2xl'>Bio:</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni cumque quam sapiente suscipit, tenetur perferendis officiis saepe error laudantium nam blanditiis dignissimos eveniet nulla sit dolorem repellat voluptatem. Eaque, odio!</p>
        </div>
        <div>
            <h1 className='font-bold text-2xl'>Interest:</h1>
            <Interest/>
        </div>
    </>
  )
}

export default Bio