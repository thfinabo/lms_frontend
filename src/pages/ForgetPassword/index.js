import React, { useState } from 'react'
import AuthLayout from '../../components/Authentication/Layout'
import TextInput from '../../components/ReusableInput/TextInput'
import { HiOutlineMail } from 'react-icons/hi'
import Button from '../../components/ReusableButton/Button'
import ChangePasswordHook from '../../hooks/ChangePasswordHook'
import { authRequest } from '../../services/auth/auth-request'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const { email, handleSubmit, handleValueChange, errors } = ChangePasswordHook();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) =>{
    setLoading(true)
    try{
      const res = await authRequest.forgotPassword({
        email: values.email
      })
      setLoading(false)
      if(res?.success){
        toast.success(res?.message)
        toast.success('Please check your email to proceed')
        navigate('/forget-password/change-password')
      }else{
        toast.error('Something went wrong')
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <AuthLayout height={'h-auto'}>
        <ToastContainer />
        <form className='text-left' onSubmit={handleSubmit(onSubmit)}>
            <p className='font-semibold text-lg'>Get password link</p>
            <p className='font-semibold text-sm py-2'>Enter email to recieve password link</p>
            <div className='py-2 pb-4'>
                <p className='text-sm py-2'>Email</p>
                <TextInput name={'email'} placeholder={'Email'} Icon={HiOutlineMail} icon={true} value={email} onChange={(e)=>handleValueChange('email', e.target.value)}/>
                {errors?.email && <p className='text-red-500 text-[12px]'>{errors?.email?.message}</p>}
            </div>
            <div className='py-6'>
                <Button type={'submit'} name={loading ? 'Loading...' : 'Submit'} className="text-white bg-primaryGreen text-white w-full py-2 rounded-md font-semibold" />
            </div>
        </form>
    </AuthLayout>
  )
}

export default ForgotPassword