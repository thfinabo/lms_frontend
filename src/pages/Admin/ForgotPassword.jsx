import TextInput from "../../components/ReusableInput/TextInput"
import { HiOutlineMail } from "react-icons/hi"
import Button from "../../components/ReusableButton/Button";
import { LiaTimesCircle } from "react-icons/lia";

const AdminForgotPassword = ({setResetPassword}) => {
  return (
    <div className='absolute h-[100vh] top-0 bg-transparentBg w-full text-left'>
      <div className="absolute right-[60px] top-[40px] cursor-pointer" onClick={()=>setResetPassword(false)}>
        <LiaTimesCircle fontSize={'1.8rem'} />
      </div>
        <form className=" relative bg-white rounded-md py-5 px-8 max-w-[600px] m-[auto] top-[40%] translate-y-[-30%]">
          <p className="font-bold text-lg">Get Password Link</p>
          <p className="pt-2">Enter email to receive password</p>
          <div className="pt-5 py-2">
            <p className='pb-1'>Email</p>
            <TextInput name={'Email'} icon={true} value={''} placeholder={'Email'} Icon={HiOutlineMail}/>
          </div>
          <div className="py-4 mt-4">
            <Button name={'Submit'} className="bg-primaryGreen text-white w-full py-3 rounded-md font-semibold" />
          </div>
        </form>
    </div>
  )
}

export default AdminForgotPassword