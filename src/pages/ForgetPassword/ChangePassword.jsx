import React from 'react'
import AuthLayout from '../../components/Authentication/Layout'
import Button from '../../components/ReusableButton/Button';
import PasswordInput from '../../components/ReusableInput/PasswordInput';
import { BiKey } from "react-icons/bi";

const ChangePassword = () => {
  return (
    <AuthLayout height={'h-auto'}>
        <div className='text-left px-4'>
            <p className='font-semibold text-lg'>Change Password</p>
            <p className='font-semibold text-sm py-2'>Enter a new password to reset</p>
            <div className='py-2'>
                <p className='text-sm py-2'>Password</p>
                <PasswordInput name={'password'} placeholder={'Password'} Icon={BiKey} icon={true} value={''}/>
            </div>
            <div className='py-2 pb-4'>
                <p className='text-sm py-2'>Confirm Password</p>
                <PasswordInput name={'confirmPassword'} placeholder={'Confirm Password'} Icon={BiKey} icon={true} value={''}/>
            </div>
            <div className='py-6'>
                <Button name="Submit" className="text-white bg-primaryGreen text-white w-full py-3 rounded-md font-semibold"/>
            </div>
        </div>
    </AuthLayout>
  )
}

export default ChangePassword