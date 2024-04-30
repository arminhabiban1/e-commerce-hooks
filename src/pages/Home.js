import React from 'react'
import Navbar from '../components/Navbar'
import {storeData} from '../Data'
import Product from '../components/Product'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <h1 className=' text-3xl text-center font-semibold mt-2 py-4'>useContext + user reducer</h1>
         <h2 className='text-4xl tracking-wid py-4 pl-8'>New In</h2>
         <div className=' px-8 flex flex-col lg:grid items-center lg:grid-cols-3 gap-4'>
         {storeData.map((item,i)=>
          <Product key={i} item={item} />
)}</div>
    </div>
  )
}

export default Home
