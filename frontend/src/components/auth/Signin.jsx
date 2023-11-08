import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'

const Signin = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-primary -z-10'>
      <Container>
        <form className='p-6 space-y-6 rounded bg-secondary w-72'>
         <Title>Sign in</Title>
          <FormInput name="email" label="Email" placeholder="yathu@gmail.com"/>
          <FormInput name="password" label="Password" placeholder="********"/>
          <Submit value='Sign in'/>

          <div className="flex justify-between">
              <a className='text-neutral-400 hover:text-white' href='#'>Forget password</a>
              <a  className='text-neutral-400 hover:text-white' href='#'>Sign up</a>
          </div>
        </form>
        
      </Container>
    </div>
  )
}

export default Signin