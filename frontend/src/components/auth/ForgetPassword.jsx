import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomLink from '../CustomLink'

const ForgetPassword = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-primary -z-10'>
    <Container>
      <form className='p-6 space-y-6 rounded bg-secondary w-96'>
       <Title>Please Enter Your Email</Title>
        <FormInput name="email" label="Email" placeholder="yathu@gmail.com"/>
       
        <Submit value='Send Link'/>

        <div className="flex justify-between">
            <CustomLink  to='/auth/signin'>Sign in</CustomLink>
            <CustomLink  to='/auth/signup'>Sign up</CustomLink>
        </div>
      </form>
      
    </Container>
  </div>
  )
}

export default ForgetPassword