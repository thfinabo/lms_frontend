import styles from './styles.module.css';
import { useState } from "react"
import AdminForgotPassword from '../../pages/Admin/ForgotPassword';

const AdminLayout = ({children,resetPassword,setResetPassword}) => {
  return (
    <div className={styles.admin_container}>
        <div className={styles.admin_wrapper}>
            <div className={styles.admin_card}>
                {children}
            </div>
        </div>
        {
            resetPassword ? 
            <AdminForgotPassword setResetPassword={setResetPassword}/>
            : <></>
        }
    </div>
  )
}

export default AdminLayout