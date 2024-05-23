import AuthLayout from '../../components/Authentication/Layout'
import Button from '../../components/ReusableButton/Button';
import PasswordInput from '../../components/ReusableInput/PasswordInput';
import TextInput from '../../components/ReusableInput/TextInput'
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { RiAppleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import SignUpHook from '../../hooks/SignUpHook';
import { authRequest } from '../../services/auth/auth-request';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const {email, password, firstName, lastName, errors, handleSubmit, handleValueChange} = SignUpHook();

    const onSubmit = async (values) =>{
        try{
            setLoading(true)
            const data = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
            }
            const res = await authRequest.signUp(data);
            setLoading(false);
            if(res?.success){
                toast.success(res?.message)
            }else{
                toast.error('Something went wrong')
            }

            // const res = await fetch('https://lms-backend-5t54.onrender.com/api/v1/signup',{
            //     body:JSON.stringify(data),
            //     method:"POST",
            //     headers: {
            //         Accept: "application/json",
            //         "Content-Type": "application/json",
            //     },

            // });
            // console.log(res)
        }catch(err){
            console.log(err?.message)
        }
    }

  return (
    <div>
        <ToastContainer />
        <AuthLayout>
            <div className='text-left'>
                <p className='text-xl font-bold'>Sign Up</p>
                <p className='text-[13px]'>signup to gain access to your courses</p>
                <div className='py-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='py-2'>
                            <p className='pb-1'>Email</p>
                            <TextInput name={'email'} icon={true} value={email} placeholder={'Email'} Icon={HiOutlineMail} onChange={(e)=>handleValueChange('email', e.target.value)}/>
                            {errors?.email && <p>{errors?.email?.message}</p>}
                        </div>
                        <div className='py-2'>
                            <p className='pb-1'>First Name</p>
                            <TextInput name={'firstName'} value={firstName} placeholder={'First Name'} Icon={HiOutlineMail} onChange={(e)=>handleValueChange('firstName', e.target.value)}/>
                            {errors?.firstName && <p>{errors?.firstName?.message}</p>}
                        </div>
                        <div className='py-2'>
                            <p className='pb-1'>Last Name</p>
                            <TextInput name={'lastName'} value={lastName} placeholder={'Last Name'} onChange={(e)=>handleValueChange('lastName', e.target.value)}/>
                            {errors?.lastName && <p>{errors?.lastName?.message}</p>}
                        </div>
                        <div className='py-2'>
                            <p className='pb-1'>Password</p>
                            <PasswordInput name={'password'} value={password} placeholder={'Password'} onChange={(e)=>handleValueChange('password',e.target.value)}/>
                            {errors?.password && <p>{errors?.password?.message}</p>}
                        </div>
                        <div className='py-3'>
                            <input type='checkbox' name="checkbox" id='checkbox'/>
                            <label className='pl-2 cursor-pointer' htmlFor='checkbox'>Remember me</label>
                        </div>
                        <div className='py-4'>
                         <Button name={loading ? 'Loading...' : 'Submit'} className="bg-primaryGreen text-white py-3 w-full font-semibold" type={'submit'}/>
                        </div>
                    </form>
                    <div>
                        <p className='font-semibold text-left'>Already have an account?  <Link className='text-lemonGreen' to={'/login'}>login here</Link></p>
                        <p className='py-4 text-center font-semibold'>OR</p>
                        <p className='font-semibold text-center '>Sign up</p>
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
            </div>
        </AuthLayout>
    </div>
  )
}

export default SignUp