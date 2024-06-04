import { Link } from "react-router-dom"
import AdminLayout from "../../components/Authentication/AdminLayout"
import Button from "../../components/ReusableButton/Button"
import PasswordInput from "../../components/ReusableInput/PasswordInput"
import TextInput from "../../components/ReusableInput/TextInput"
import { HiOutlineMail } from "react-icons/hi"
import { useState } from "react"
import RegisterHook from "../../hooks/Admin/RegisterHook"
import { adminAuthRequest } from "../../services/auth/admin-auth-request"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    const {email, firstName, lastName, password, errors, handleSubmit, handleValueChange} = RegisterHook();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (values) =>{
        try{
            setLoading(true)
            const data = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
            }
            const res = await adminAuthRequest.register(data);
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
                    <p className="font-semibold text-lg pb-2">Register</p>
                    <p>Signup to gain access to your dashboard</p>
                    <div className="py-4">
                        <div>
                            <p className='pb-1'>First Name</p>
                            <TextInput name={'firstName'} value={firstName} onChange={(e)=>handleValueChange('firstName', e.target.value)} placeholder={'First Name'} />
                            {errors?.firstName && <p className='text-red-500 text-[12px]'>{errors?.firstName?.message}</p>}
                        </div>
                        <div className="py-2">
                            <p className='pb-1'>Last Name</p>
                            <TextInput name={'lastName'} value={lastName} onChange={(e)=>handleValueChange('lastName', e.target.value)} placeholder={'Last Name'} />
                            {errors?.lastName && <p className='text-red-500 text-[12px]'>{errors?.lastName?.message}</p>}
                        </div>
                        <div className="py-2">
                            <p className='pb-1'>Email</p>
                            <TextInput name={'email'} icon={true} value={email} onChange={(e)=>handleValueChange('email', e.target.value)} placeholder={'Email'} Icon={HiOutlineMail}/>
                            {errors?.email && <p className='text-red-500 text-[12px]'>{errors?.email?.message}</p>}
                        </div>
                        <div className="py-2">
                            <p className='pb-1'>Password</p>
                            <PasswordInput name={'Password'} value={password} onChange={(e)=>handleValueChange('password', e.target.value)} placeholder={'Password'} />
                            {errors?.password && <p className='text-red-500 text-[12px]'>{errors?.password?.message}</p>}
                        </div>
                        <div className='flex justify-between pt-2'>
                            <div>
                                <input type='checkbox' name="checkbox" id='checkbox'/>
                                <label className='pl-2 cursor-pointer' htmlFor='checkbox'>Remember me</label>
                            </div>
                            <Link to={'/admin/forgot-password'}>Forgot password?</Link>
                        </div>
                        <div className="py-3 pt-4">
                            <p>Already have an account? <span className="hover:text-red-500 cursor-pointer" onClick={()=>navigate('/admin/login')}>Login</span></p>
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

export default Register