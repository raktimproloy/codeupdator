import React from 'react'
import AboutDetails from './AboutDetails'

function Index() {
  return (
    <div className='max-w-6xl mx-auto py-5'>
    <header className="bg-gray-800 text-white py-8 rounded">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white text-center">CodesStackFlow</h1>
      </div>
    </header>
    <AboutDetails />
  </div>
  )
}

export default Index