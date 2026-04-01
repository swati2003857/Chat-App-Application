import React from 'react'

const SearchInput = () => {
  return (
    <div className='flex items-center gap-2'>
      <input
        type="text"
        placeholder='Search'
        className='input input-bordered rounded-full'
      />
      <button className='btn btn-circle bg-sky-500 text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
      </button>
    </div>
  )
}

export default SearchInput;