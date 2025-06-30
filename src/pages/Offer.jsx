import React from 'react'

const Offer = () => {
  return (
    <div className='max-w-7xl mx-auto p-4'>
    <h2 className='text-2xl font-bold mb-4'>Offer</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='bg-green-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition'>
            <h3 className='text-xl font-semibold mb-2'>Fruits</h3>
            <p className='text-gray-700 '>Use Code : <span className='font-bold text-green-600'>ANKITT</span> {" "}</p>
        </div>
    </div>
      
    </div>
  )
}

export default Offer
