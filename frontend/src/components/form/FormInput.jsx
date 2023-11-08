import React from 'react'

const FormInput = ({name,label,placeholder,...rest}) => {
  return (
    <div className='flex flex-col-reverse'>
    <input id={name} name={name} placeholder={placeholder} {...rest} className='w-full p-1 text-lg text-white transition bg-transparent border-2 rounded outline-none peer border-neutral-400 focus:border-white'/>
    <label className='self-start font-semibold transition text-neutral-400 peer-focus:text-white' htmlFor={name}>{label}</label>
    </div>
  )
}

export default FormInput