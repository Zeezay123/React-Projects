import React from 'react'
import { useState, useContext } from 'react'
import './App.css'
import UserInput from './components/UserInput'
import SelectCurrency from './components/SelectCurrency'
import Card from './components/Card'
import { GetData } from '../../GetData'


function App() {
  const [amount, setAmount] = useState(100)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('GBP')

  return (
    <div className='card flex flex-col p-7 rounded-lg items-center gap-6 min-h-[350px] w-[350px] mt-16 bg-teal-950'>

      <div className=' text-white text-2xl  font-medium  mt-[30px]'> Currency Converter</div>
      <UserInput amount={amount} setAmount={setAmount} />
      <SelectCurrency amount={amount} setFromCurrency={setFromCurrency} setToCurrency={setToCurrency}  fromCurrency = {fromCurrency} toCurrency ={toCurrency}  />
       <Card   fromCurrency={fromCurrency} toCurrency={toCurrency} amount={amount}/>
  
    </div>
  )
}

export default App