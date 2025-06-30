import React from 'react'

const Categories = () => {
  return (
    <div className='max-w-7xl mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-6'>Categories</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-6 gap-3'>
        <div className='bg-white shadow-md p-4 rounded-lg flex  items-center justify-center text-center font-semibold
        hover:shadow-lg transition cursor-pointer'>
            Fruits
        </div>
          <div className='bg-white shadow-md p-4 rounded-lg flex  items-center justify-center text-center font-semibold
        hover:shadow-lg transition cursor-pointer'>
            Fruits
        </div>
          <div className='bg-white shadow-md p-4 rounded-lg flex  items-center justify-center text-center font-semibold
        hover:shadow-lg transition cursor-pointer'>
            Fruits
        </div>
          <div className='bg-white shadow-md p-4 rounded-lg flex  items-center justify-center text-center font-semibold
        hover:shadow-lg transition cursor-pointer'>
            Fruits
        </div>
      </div>
    </div>
  )
}

export default Categories
