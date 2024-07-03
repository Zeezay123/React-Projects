import React from 'react'
import Dollar from '../assets/Dollar.png'
import From from './From'
import { useState } from 'react'

const SelectCurrency = ({fromCurrency,toCurrency,setFromCurrency,setToCurrency}) => {
  const [isRotated, setIsRotated] = useState(false);
  const handleSwap =()=>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setIsRotated(prev => !prev);

  }


 const roll = document.getElementById('roll')
 const flag = fromCurrency.substring(0, 2);
 const sflag = toCurrency.substring(0, 2);
 
  



  return (
    <div className=' flex  w-[100%] justify-between'>
    
     <div className='flex gap-2 border-white border rounded-md p-1'>
       <img src={`https://flagsapi.com/${flag}/flat/64.png`} className='w-[34px] h-[34px]' />
      <From  fromCurrency = {fromCurrency} selectedCurrency={fromCurrency} handleChange={event=> setFromCurrency(event.target.value)} />
    </div>

  
      <div onClick={handleSwap}  className={`w-10 h-10 cursor-pointer border flex justify-center items-center border-white rounded-full  ${isRotated ? 'rotate' : ''}`} id='roll' > <img src={Dollar} alt=""  className='w-6 h-6'/></div>
   
   
   
      <div  className='flex gap-2 border-white border rounded-md p-1'>
      <img src={`https://flagsapi.com/${sflag}/flat/64.png`} className='w-[34px] h-[34px]' />
      <From  selectedCurrency={toCurrency}  toCurrency={toCurrency} handleChange={event=> setToCurrency(event.target.value)} />
    </div>


    </div>
  )
}

export default SelectCurrency
