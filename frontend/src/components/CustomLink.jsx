import React from 'react'
import { Link } from 'react-router-dom'

const CustomLink = ({to,children}) => {
  return (
    <Link className='text-neutral-400 hover:text-white' to={to}>{children}</Link>
  )
}

export default CustomLink