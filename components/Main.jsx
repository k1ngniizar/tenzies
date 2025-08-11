import React, { useState } from 'react'
import Die from './die/Die'

function Main() {
  return (
    
    <main className='bg-[#0b2434] h-[100vh] w-full flex items-center justify-center px-3 py-5'>
      
     <section className='h-full w-full max-w-2xl py-5 lg:max-h-[500px] bg-gray-100 rounded-lg flex flex-col gap-4 items-center lg:justify-center md:justify-center justify-start overflow-hidden overflow-y-scroll scrollbar-hide'>
      <h1 className='bold font-bold text-2xl'>Tenzies</h1>
      <p className='w-full max-w-[400px] text-center px-2'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <Die/>
     </section>
    </main>
  )
}

export default Main