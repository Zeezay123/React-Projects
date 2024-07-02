import React from 'react'

const UserInput = () => {
  return (
    <div className=' flex flex-col gap-3 w-[100%]'>
        <label htmlFor="userInput" className='text-white'> Enter Amount</label>
      <input type="text" id='userInput' className='w-[100%] h-11 p-2 rounded-md text-white border-2 border-inherit bg-transparent '  placeholder='type in amount....' />
    </div>
  )
}

export default UserInput
