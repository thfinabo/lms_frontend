import React from 'react'
import AuthLayout from '../../components/Authentication/Layout'
import TextInput from '../../components/ReusableInput/TextInput'
import PasswordInput from '../../components/ReusableInput/PasswordInput'
import Button from '../../components/ReusableButton/Button'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { RiAppleFill } from "react-icons/ri";
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
      <AuthLayout>
        <div>
        <form>
          <div className='text-left'>
            <div className='rounded-sm pb-5'>
              <p className='text-xl font-bold'>Login</p>
              <p className='text-[13px]'>login to gain access to your courses</p>
            </div>
            <div className='py-2'>
              <p className='pb-1'>Email</p>
              <TextInput name={'Email'} icon={true} value={''} placeholder={'Email'} Icon={HiOutlineMail}/>
            </div>
            <div className='py-2'>
              <p className='pb-1'>Password</p>
              <PasswordInput name={'Password'} value={''} placeholder={'Password'}/>
            </div>
            <div className='flex justify-between pt-2'>
              <div>
                <input type='checkbox' name="checkbox" id='checkbox'/>
                <label className='pl-2 cursor-pointer' htmlFor='checkbox'>Remember me</label>
              </div>
              <p>Forgot password?</p>
            </div>
            <div className='py-3 pt-8'>
              <Button className="bg-primaryGreen text-white w-full py-3 rounded-md font-semibold" name={'Login'}/>
            </div>
          </div>
        </form>
        <div className='pt-4'>
          <p className='font-semibold text-left'>Don’t have an account?  <Link className='text-lemonGreen' to={'/sign-up'}>signup here</Link></p>
          <p className='py-4 text-center font-semibold'>OR</p>
          <p className='font-semibold text-left'>Sign in your account</p>
          <div className='flex justify-around pt-5'>
            <div className='sm:border-2 sm:border-gray2 py-2 sm:px-8 rounded-md'>
              <FcGoogle size={'1.6rem'} className='cursor-pointer'/>
            </div>
            <div className='sm:border-2 sm:border-gray2 py-2 sm:px-8 rounded-md'>
              <FaFacebook size={'1.6rem'} className='cursor-pointer text-blue'/>
            </div>
            <div className='sm:border-2 sm:border-gray2 py-2 sm:px-8 rounded-md'>
              <RiAppleFill size={'1.6rem'} className='cursor-pointer'/>
            </div>
          </div>
        </div>
        </div>
      </AuthLayout>
    </div>
  )
}

export default LoginPage