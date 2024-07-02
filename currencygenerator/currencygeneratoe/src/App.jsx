import React from 'react'
import { useState, useContext } from 'react'
import './App.css'
import UserInput from './components/UserInput'
import SelectCurrency from './components/SelectCurrency'
import Card from './components/Card'
import Rate from './components/Rate'


function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='card flex flex-col p-7 rounded-lg items-center gap-6 h-[500px] w-[450px] mt-16 bg-teal-950'>

      <div className=' text-white text-3xl  font-medium  mt-[30px]'> Currency Converter</div>
      <UserInput />
      <SelectCurrency />
       <Card />
      <Rate />
    </div>
  )
}

export default App