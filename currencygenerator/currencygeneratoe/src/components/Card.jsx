import React from 'react'
import { GetData } from '../../../GetData'
import { useState } from 'react';

const Card = ({fromCurrency,toCurrency,amount}) => {
const [displayRate, setDisplayRate]= useState(true)
const [rate, setRate] = useState(78.87)

 const  apiKey = 'bfe9f7e3f5dcd73e06fd9a69';



const handleClick = async () => {

const conRate = await GetData(apiKey, fromCurrency,toCurrency,amount) 
 setDisplayRate(false)
setRate(conRate)
}



return (
  <div className='w-[100%] flex flex-col gap-8 mt-3'>

 
    <div onClick={handleClick} className='w-[100%] cursor-pointer h-10 p-5 bg-white text-black rounded-sm  flex font-bold justify-center items-center'>
     Get Exchange Rate
    </div>
    

    <div className={`w-[100%] h-14 p-5 bg-white cursor-pointer text-black flex  font-bold justify-center rounded-sm gap-5 items-center  ${displayRate ? 'hidden': 'flex'} `}>
      <div> {`${amount}  ${fromCurrency}`}</div>
      <div> = </div>
      <div> {`${rate}  ${toCurrency}`}</div>
    </div>
     </div>
  )
}

export default Card
