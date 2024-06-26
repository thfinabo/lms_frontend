import { Link } from "react-router-dom"
import AdminLayout from "../../components/Authentication/AdminLayout"
import Button from "../../components/ReusableButton/Button"
import PasswordInput from "../../components/ReusableInput/PasswordInput"
import TextInput from "../../components/ReusableInput/TextInput"
import { HiOutlineMail } from "react-icons/hi"
import { useState } from "react"
import LoginHook from "../../hooks/Admin/LoginHook"
import { adminAuthRequest } from "../../services/auth/admin-auth-request"
import { ToastContainer, toast } from "react-toastify"
const Login = () => {
    const {email, password, handleSubmit, handleValueChange, errors} = LoginHook();

    const [loading, setLoading] = useState();

    const onSubmit = async (values) =>{
        console.log(values)
        try{
            setLoading(true)
            const res = await adminAuthRequest.login({
                email: values.email
            });
            setLoading(false)
            if(res?.success){
                toast.success(res?.message)
                // toast.success(res?.user?.registrationToken)
            }
        }catch(err){
            toast.success(err?.response?.data?.message)
            console.log(err)
        }
    }
  return (
    <div>
        <ToastContainer />
        <AdminLayout>
            <div>
                <form className="w-[80%] m-auto text-left py-6" onSubmit={handleSubmit(onSubmit)}>
                    <p className="font-semibold text-lg">Log in</p>
                    <p>login to gain access to your dashboard</p>
                    <div className="py-4">
                        <div>
                            <p className='pb-1'>Email</p>
                            <TextInput name={'Email'} icon={true} value={email} placeholder={'Email'} Icon={HiOutlineMail} onChange={(e)=>handleValueChange('email', e.target.value)}/>
                            {errors?.email && <p className='text-red-500 text-[12px]'>{errors?.email?.message}</p>}
                        </div>
                        <div className="py-6">
                            <p className='pb-1'>Password</p>
                            <PasswordInput name={'Password'} value={password} placeholder={'Password'} onChange={(e)=>handleValueChange('password', e.target.value)}/>
                            {errors?.password && <p className='text-red-500 text-[12px]'>{errors?.password?.message}</p>}
                        </div>
                        <div className='flex justify-between pt-2'>
                            <div>
                                <input type='checkbox' name="checkbox" id='checkbox'/>
                                <label className='pl-2 cursor-pointer' htmlFor='checkbox'>Remember me</label>
                            </div>
                            <Link to={'/admin/forgot-password'}>Forgot password?</Link>
                        </div>
                        <div className="py-4 mt-4">
                            <Button name={loading ? 'Loading...' : 'Submit'} type={'submit'} className="bg-primaryGreen text-white w-full py-3 rounded-md font-semibold" />
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    </div>
  )
}

export default Login