import React from 'react'

const Submit = ({value}) => {
  return (
    <input type='submit' className='w-full p-1 text-lg font-semibold transition bg-white rounded cursor-pointer text-secondary hover:bg-opacity-90 ' value={value}/>
  )
}

export default Submit