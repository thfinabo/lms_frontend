import styles from './styles.module.css';

const AuthLayout = ({children,height}) => {
  return (
    <div className={styles.container}>
        <div className={styles.inner_div}>
            <div className={`bg-white h-auto ${height ? `sm:${height}` : `sm:h-[650px]`} w-full sm:max-w-[520px] m-auto rounded-2xl p-6 px-12 ${styles.wrapper}`}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default AuthLayout