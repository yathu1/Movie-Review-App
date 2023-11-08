import React from 'react'
import {BsFillSunFill} from 'react-icons/bs'
import Container from '../Container'

const Navbar = () => {
  return (
   <div className="shadow-sm bg-secondary shadow-gray-700">
    <Container className="p-2">
        <div className="flex items-center justify-between">
        < img src='./logo.png' alt='' className='h-10'/>
    <ul className='flex items-center space-x-4'>
        <li>
            <button className='p-1 rounded bg-neutral-400'>
                <BsFillSunFill className='text-secondary' size={24}/>
            </button>
            </li>
        <li>
            <input type='text' className='p-1 text-xl text-white transition bg-transparent border-2 rounded outline-none border-neutral-400 focus:border-white' placeholder='Search...'/>
        </li>
        <li className='text-lg font-semibold text-white'>
            Login
        </li>
    </ul>
        </div>
 
    </Container>
   
   </div>
  )
}

export default Navbar