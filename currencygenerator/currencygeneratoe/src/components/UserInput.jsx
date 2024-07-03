import React from 'react'




const UserInput = ({setAmount}) => {


const handleChange = (e) => {
   const newNumber = e.target.value
     setAmount(newNumber)
    
}

  return (
    <div className=' flex flex-col gap-3 w-[100%]'>
        <label htmlFor="userInput" className='text-white' onChange={handleChange}  > Enter Amount</label>
      <input required type='text' onChange={handleChange}  id='userInput' className='w-[100%] h-11 p-2 rounded-md text-white border-2 border-inherit bg-transparent '  placeholder='type in amount....' />
    </div>
  )
}

export default UserInput
