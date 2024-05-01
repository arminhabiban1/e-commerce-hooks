import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { StoreContext } from '../context-reducer/StoreContext'
import BasketProduct from './BasketProduct'

const Basket = () => {
  const {products,total}= useContext(StoreContext)
  return (
    <div>
      <Navbar/>
      <div className='flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl'>
      <h3>Your Basket</h3>
      <p>total: ${total}</p>
      </div>
      {
        products.map((product,i)=>
<BasketProduct
key={i}
item={product}/>
        )
      }
    </div>
  )
}

export default Basket
