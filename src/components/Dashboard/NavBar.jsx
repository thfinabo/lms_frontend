import { PiHandWavingFill } from "react-icons/pi";
import SearchInput from "../ReusableInput/SearchInput";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import styles from './styles.module.css';
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = ({setOpen, open}) => {
  return (
    <div className="w-full">
        <div className="flex justify-between px-4 py-3">
            <div className="hidden lg:block">
                <p className="flex items-center"><span className="text-[28px] font-semibold mr-2">Hello Ella! </span><PiHandWavingFill className="text-yellow inline" fontSize={'1.6rem'}/></p>
                <p>Let’s learn something new today!</p>
            </div>
            <div className={`w-full lg:w-auto flex justify-between items-center gap-[10px]`}>
                <SearchInput placeholder={'Search from courses...'} styles={'w-full lg:w-[40%]'}/>
                <div className={`${styles.icons} flex gap-[20px]`}>
                    <div className="border border-gray3 p-2 max-w-fit min-w-[50px] rounded-md">
                        <IoNotificationsOutline fontSize={'1.5rem'} className="m-auto"/>
                    </div>
                    <div className="border border-gray3 p-2 max-w-fit min-w-[50px] rounded-md">
                        <BsCart fontSize={'1.5rem'} className="m-auto"/>
                    </div>
                    <div className="border border-gray3 p-2 max-w-fit min-w-[50px] rounded-md">
                        <FiUserCheck fontSize={'1.5rem'} className="m-auto"/>
                    </div>
                </div>
                <div className="block sm:hidden ml-2">
                    <RxHamburgerMenu fontSize={'1.6rem'} onClick={()=>setOpen(!open)}/>
                    {/* {
                        open ?
                        <div className="bg-white border-2 flex flex-col items-start  absolute right-[20px] p-4">
                            <div className="flex">
                            <IoNotificationsOutline fontSize={'1.3rem'} className="m-auto mr-2"/> Notification
                            </div>
                            <div className="flex py-3">
                                <BsCart fontSize={'1.5rem'} className="m-auto mr-2"/> My Courses
                            </div>
                            <div className="flex">
                                <FiUserCheck fontSize={'1.5rem'} className="m-auto mr-2"/> Profile
                            </div>
                        </div> 
                        : <></>
                    } */}
                </div>
            </div>
        </div>
        <div className="block lg:hidden px-6">
            <p className="flex items-center"><span className="text-[28px] font-semibold mr-2">Hello Ella! </span><PiHandWavingFill className="text-yellow inline" fontSize={'1.6rem'}/></p>
            <p className="text-left">Let’s learn something new today!</p>
        </div>
    </div>
  )
}

export default NavBar