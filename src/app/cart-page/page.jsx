import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CartArea from '../../components/CartArea/CartArea'

export default function CartPage() {
  return (
    <main className='w-[100dvw] h-[200dvh] flex flex-col gap-y-6 '>

    <div className={`navbar-area w-full h-[5rem]`}>

<Navbar />
</div>

<div className="main-area w-full h-[85dvh]  tablet:h-[98dvh] ">

<CartArea />
</div>



    <Footer/>
</main>
  )
}
