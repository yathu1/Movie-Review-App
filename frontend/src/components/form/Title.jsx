import React from 'react'

const Title = ({children}) => {
  return (
    <div>
         <h1 className='text-xl font-semibold text-center text-white'>{children}</h1>
    </div>
  )
}

export default Title