import React from 'react'

const Cart = () => {
  return (
    <div className='w-full max-w-md bg-white p-4 sm:p-6 shadow-lg rounded-lg mx-auto'>
    <h1 className='text-lg font-bold mb-4 text-center'>Your Cart</h1>
   <div className='space-y-4'>
    {/* Cart Items */}

    <div className='flex flex-col sm:flex-row items-center justify-between border-b pb-3'>
        <div className='flex items-center gap-4 mb-4 sm:mb-8'>
        <div className='w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center'>
            <img src="" alt="" className='w-16h-16 object-contain' />
        </div>
        <div>
            <h4  className='font-semibold text-sm'>Amul Milk</h4>
            <p className='text-xs text-gray-500'>500g</p>
        </div>
        </div>
        <div className='flex flex-col items-center sm:items-end'>
            <p className='text-green-600 font-semibold'>250₹</p>
            <div className=' flex items-center mt-2 border rounded p-1 overflow-hidden'>
                <span>QTY:1</span>
            </div>
        </div>
    </div>

   </div>
    </div>
  )
}

export default Cart
