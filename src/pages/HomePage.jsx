import React from 'react'
import Banner from './Banner'
import Card from './Card'


const HomePage = () => {
  return (
    <div>
       <Banner/>
       <div className='p-4 grid grid-cols-2 sm:cols-3 lg:grid-cols-4'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       </div>
    </div>
  )
}

export default HomePage