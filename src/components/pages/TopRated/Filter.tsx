import React from 'react'
import Select from '../../shared/MultiSelect/Select'

function Filter() {
  return (
    <>
      <div className="w-full shadow p-5 rounded">
      <div className="relative">
      <div className="absolute flex items-center ml-2 h-full">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
        </svg>
      </div>

      {/* <input type="text" placeholder="Search by listing, location, bedroom number..." className="px-8 py-3 w-full rounded border-transparent text-sm"/> */}
      <div className='flex'>
        <input type="text" placeholder="Name or @username" className="px-8 input input-bordered w-full rounded-tr-none rounded-br-none focus:outline-none border-r-0" />
        <button className="btn rounded-tl-none rounded-bl-none border-t">Search</button>
      </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="font-medium">
        Filters
        </p>

        {/* <button className="px-4 py-2 text-sm font-medium rounded">
        Reset Filter
        </button> */}
        <button className="btn">Reset Filter</button>
      </div>

        <div className="block md:flex w-full gap-4 mt-4">
          <div className='w-full md:w-1/4'>
            <span className="label-text block md:inline">Country</span>
            <select className="select select-bordered w-full md:max-w-xs mt-1">
              <option disabled value="default" className='py-2'>Select Country</option>
              <option value="bangladesh" className='py-2'>Bangladesh</option>
              <option value="india" className='py-2'>India</option>
              <option value="pakistan" className='py-2'>Pakistan</option>
            </select>
          </div>
          <div className='w-full md:w-3/4'>
            <span className="label-text">Interest</span>
            <Select/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Filter