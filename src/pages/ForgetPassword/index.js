import React from 'react'
import AuthLayout from '../../components/Authentication/Layout'
import TextInput from '../../components/ReusableInput/TextInput'
import { HiOutlineMail } from 'react-icons/hi'
import Button from '../../components/ReusableButton/Button'

const ForgotPassword = () => {
  return (
    <AuthLayout height={'h-auto'}>
        <div className='text-left'>
            <p className='font-semibold text-lg'>Get password link</p>
            <p className='font-semibold text-sm py-2'>Enter email to recieve password link</p>
            <div className='py-2 pb-4'>
                <p className='text-sm py-2'>Email</p>
                <TextInput name={'email'} placeholder={'Email'} Icon={HiOutlineMail} icon={true} value={''}/>
            </div>
            <div className='py-6'>
                <Button name="Submit" className="text-white bg-primaryGreen text-white w-full py-2 rounded-md font-semibold"/>
            </div>
        </div>
    </AuthLayout>
  )
}

export default ForgotPassword