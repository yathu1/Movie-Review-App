import React, { useState } from 'react'
import Container from '../Container'
import Title from '../form/Title'

import Submit from '../form/Submit'

const OTP_LENGTH = 6;

const EmailVerification = () => {
    const [otp,setOtp] = useState(new Array(OTP_LENGTH).fill(''))
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-primary -z-10'>
        <Container>
          <form className='p-6 space-y-6 rounded bg-secondary '>
            <div>
            <Title>Please Enter Your OTP to verify your account</Title>
           <p className='text-center text-neutral-400 '>OTP has been sent to your email</p>
            </div>
            <div className='flex items-center justify-center space-x-4'>
          {otp.map((_,index)=>{
                return (
                    <input type='number' className='w-12 h-12 text-xl text-center text-white bg-transparent border-2 rounded outline-none spin-button-none font-semibolds border-neutral-400 focus:border-white'/>
                );
          })}
             </div>
            <Submit value='Send Link'/>
    
          
          </form>
          
        </Container>
      </div>
      )
}

export default EmailVerification