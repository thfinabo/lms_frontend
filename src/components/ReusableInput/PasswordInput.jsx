import { useState } from 'react';
import styles from './styles.module.css';
import { HiOutlineMail } from "react-icons/hi";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const PasswordInput = ({name,icon,value,placeholder,Icon,onChange}) => {
    const [type, setType] = useState('password');

    const handleClick = () =>{
        if(type === 'password'){
            setType('text')
        }else{
            setType('password')
        }
    }
  return (
    <div className={`${styles.text_input} relative`}>
        {
            icon ? <Icon className="absolute left-3 top-4"/> : ''
        }
        <div className='absolute right-4 top-4' onClick={handleClick}>
            {
                type === 'password' ?  <IoEyeOutline  />:
                <FaRegEyeSlash />
            }
        </div>
        <input name={name} value={value} placeholder={placeholder} type={type} className={icon && styles.icon} onChange={onChange}/>
    </div>
  )
}

export default PasswordInput;