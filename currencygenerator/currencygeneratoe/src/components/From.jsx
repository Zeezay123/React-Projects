import React from 'react'
import { useState } from 'react';
import Currency from '/current.json'

 


const From = ({handleChange,selectedCurrency}) => {  

  
 
 

  return (
    <div>
       <select value={selectedCurrency} onChange={handleChange} className='w-[60px] h-[35px] cursor-pointer  rounded-md bg-transparent text-white focus:outline-none  ' name="currency" id="currency"> 
      { Currency.map(oneCur => (
        <option  className='text-black' value={oneCur.cc} key={oneCur.cc} id='fromCur'>{oneCur.cc}</option> 
       ))  }  </select> 
    </div>
  ) 
}

export default From
