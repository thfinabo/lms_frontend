import { Link } from "react-router-dom"
import AdminLayout from "../../components/Authentication/AdminLayout"
import Button from "../../components/ReusableButton/Button"
import PasswordInput from "../../components/ReusableInput/PasswordInput"
import TextInput from "../../components/ReusableInput/TextInput"
import { HiOutlineMail } from "react-icons/hi"
import { useState } from "react"
const Login = () => {
    const [resetPassword, setResetPassword] = useState(false)
  return (
    <AdminLayout setResetPassword={setResetPassword} resetPassword={resetPassword}>
        <div>
            <div className="w-[80%] m-auto text-left py-6">
                <p className="font-semibold text-lg">Log in</p>
                <p>signup to gain access to your courses</p>
                <div className="py-4">
                    <div>
                        <p className='pb-1'>Email</p>
                        <TextInput name={'Email'} icon={true} value={''} placeholder={'Email'} Icon={HiOutlineMail}/>
                    </div>
                    <div className="py-6">
                        <p className='pb-1'>Password</p>
                        <PasswordInput name={'Password'} value={''} placeholder={'Email'} />
                    </div>
                    <div className='flex justify-between pt-2'>
                        <div>
                            <input type='checkbox' name="checkbox" id='checkbox'/>
                            <label className='pl-2 cursor-pointer' htmlFor='checkbox'>Remember me</label>
                        </div>
                        <Link to={'/admin/forgot-password'}>Forgot password?</Link>
                    </div>
                    <div className="py-4 mt-4" onClick={()=>setResetPassword(true)}>
                        <Button name={'Submit'} className="bg-primaryGreen text-white w-full py-3 rounded-md font-semibold" />
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
  )
}

export default Login