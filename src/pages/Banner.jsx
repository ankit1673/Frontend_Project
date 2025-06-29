import React from 'react'

const Banner = () => {
  return (
    <div className="w-full my-6 px-4">
        <div className="relative rounded-xl overflow-hidden shadow-lg h-60 md:h-80">
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" alt="Banner Image" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center">
            <h2 className="text-white text-3xl  md:text-5xl font-bold mb-2">Get Your Groceries <br/>
            Delivered in 10 minutes </h2>
            <p className="text-white text-lg md:text-xl mb-4">Fresh & Fast Delivery at your doorstep !</p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 ">
            Shop Now
          </button>
        </div>
        </div>


    </div>
  )
}

export default Banner