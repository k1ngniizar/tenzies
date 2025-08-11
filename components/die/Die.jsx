import React, { useState } from 'react'
import ReactConfetti from 'react-confetti';
import {useWindowSize} from "react-use"

function Die() {
  //  crypto.randomUUID()
  const {width, height} = useWindowSize();
  const randomNumbers = () => new Array(10).fill(0).map(()=> (
    {
      value: Math.ceil(Math.random()* 6),
      isHeld: false,
      id: crypto.randomUUID()
    }
  ))

  
  const [diceObj, setDiceObj] = useState(()=> randomNumbers())
  
  const gameWon = diceObj.every(item => item.isHeld) && diceObj.every(item => item.value === diceObj[0].value)
  
  const held = (id)=>{
    setDiceObj(prev => prev.map(prev => prev.id === id ? {...prev, isHeld:!prev.isHeld}: prev))
  }
  
  const roll = ()=>
    gameWon ? setDiceObj(randomNumbers()) :
    setDiceObj(prev => prev.map(prev => prev.isHeld ? prev : {...prev, value:Math.ceil(Math.random()* 6) }))
  
  
  return (
    <>
      {gameWon && <ReactConfetti width={width} height={height} />}
      <div className='grid grid-cols-5 gap-4'>
        {
          diceObj.map((item,idx)=>{
            return (
              <button onClick={()=> held(item.id)} key={idx} className={`${item.isHeld?'bg-green-600':'bg-white'} flex items-center justify-center shadow-md border-gray-300 border rounded font-bold h-10 w-10 lg:hover:border lg:hover:border-[#646cff] active:bg-[#535bf2]`}>{item.value}</button>
            )
          })
        }
      </div>
      <button onClick={roll} className='uppercase font-bold text-white bg-[#0b2434] border border-transparent lg:hover:border  lg:hover:border-[#646cff] active:bg-[#535bf2]'>
       {gameWon?"new game":"roll"}
      </button>
    </>
  )
}

export default Die