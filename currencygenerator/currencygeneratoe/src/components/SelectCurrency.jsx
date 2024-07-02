import React from 'react'
import { useEffect, useState } from 'react'
import { GetData } from '../../../GetData'
import Dollar from '../assets/Dollar.png'
import Currency from '/current.json'

const SelectCurrency = () => {


  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('GBP')

  const  apiKey = 'bfe9f7e3f5dcd73e06fd9a69';
  const  amount = 100

  const conRate = GetData(apiKey, fromCurrency,toCurrency,amount) 

  // console.log(conRate)
  return (
    <div className=' flex  w-[100%] justify-between'>
     <div>
       <select className='w-[90px] h-[35px] border rounded-md bg-transparent text-white p-2' name="currency" id="currency"> 
      { Currency.map(oneCur => (
        <option className='text-black' value={oneCur.cc} id='fromCur'>{oneCur.cc}</option> 
       ))  }  </select> 
    </div>

  
      <div className='w-8 h-8 border flex justify-center items-center border-white rounded-full' > <img src={Dollar} alt=""  className='w-6 h-6'/></div>
   
   
   
      <div>
       <select className='w-[90px] h-[35px] border rounded-md bg-transparent text-white p-2' name="currency" id="currency"> 
       { Currency.map(oneCur => (
        <option className='text-black' value={oneCur.cc} id='fromCur'>{oneCur.cc}</option> 
       ))  }  </select>
    </div>


    </div>
  )
}

export default SelectCurrency
