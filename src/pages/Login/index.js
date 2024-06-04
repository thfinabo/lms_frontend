import React, { useState } from 'react';
import AuthLayout from '../../components/Authentication/Layout';
import TextInput from '../../components/ReusableInput/TextInput';
import PasswordInput from '../../components/ReusableInput/PasswordInput';
import Button from '../../components/ReusableButton/Button';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { RiAppleFill } from "react-icons/ri";
import { HiOutlineMail } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import LoginHook from '../../hooks/LoginHook';
import { ToastContainer, toast } from 'react-toastify';
import { authRequest } from '../../services/auth/auth-request';
import Cookies from 'js-cookie';
import { AuthContext } from '../../AuthProvider';
import { useContext, useEffect } from 'react';

const LoginPage = () => {
  const isAuthenticated = useContext(AuthContext);

  console.log(isAuthenticated)

  const {email, password, handleSubmit, handleValueChange, errors} = LoginHook();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) =>{
    try{
      setLoading(true)
      const data = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password
      }
      const res = await authRequest.login(data);
      setLoading(false);
      if(res?.success){
        const authToken = res?.data?.authToken
        Cookies.set('authToken',authToken,{expires: 1});
        toast.success(res?.message);
      }else{
          toast.error('Something went wrong')
      }
    }catch(err){
        console.log(err?.message)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <ToastContainer />
      <AuthLayout>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='text-left'>
            <div className='rounded-sm pb-5'>
              <p className='text-xl font-bold'>Login</p>
              <p className='text-[13px]'>login to gain access to your courses</p>
            </div>
            <div className='py-2'>
              <p className='pb-1'>Email</p>
              <TextInput name={'Email'} icon={true} value={email} placeholder={'Email'} Icon={HiOutlineMail} onChange={(e)=> handleValueChange('email', e.target.value)}/>
              {errors?.email && <p className='text-red-500 text-[12px]'>{errors?.email?.message}</p>}
            </div>
            <div className='py-2'>
              <p className='pb-1'>Password</p>
              <PasswordInput name={'Password'} value={password} placeholder={'Password'} onChange={(e)=>handleValueChange('password',e.target.value)}/>
            </div>
            <div className='flex justify-between pt-2 flex-col sm:flex-row'>
              <div>
                <input type='checkbox' name="checkbox" id='checkbox'/>
                <label className='pl-2 cursor-pointer' htmlFor='checkbox'>Remember me</label>
              </div>
              <p className='pt-2 sm:pt-0 hover:text-red-500 cursor-pointer inline' onClick={()=>navigate('/forgot-password')}>Forgot password?</p>
            </div>
            <div className='py-3 pt-8'>
              <Button type={'submit'} className="bg-primaryGreen text-white w-full py-3 rounded-md font-semibold" name={loading ? 'Loading...' : 'Login'}/>
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