import React from 'react'

const Card = () => {
  return (
    <div className='border rounded-lg m-1 shadow hover:shadow-lg trasition-all duration-300 p-3 flex flex-col'>
    <div className='relative'> 
    <img src="" alt="Product Image"
    className='w-full h-40 object-contain'

    />
    <div className='absolute top-2 left-2 bg-green-500 text-white
    md:text-xs px-2 py-1 rounded'>
        100%OFF
    </div>
    </div>
      <h3 className='mt-2 font-semibold text-sm'>Product Name</h3>
      <p className='text-xs text-gray-500'>500g</p>
      <div className='flex justify-between items-center mt-2'>
        <p className='font-bold text-green-500 text-lg'>230 ₹</p>
        <button className='bg-green-500 text-white px-4 py-1 rounded-full hover:bg-green-700'>Add</button>
      </div>
    </div>
  )
}

export default Card
