import styles from './styles.module.css';

const Button = ({type,variant,name, ...rest}) => {
  return (
    <div className=''>
        <button className={`${styles[variant]} ${rest.className}`} type={type ? type : 'button'} {...rest}>{name}</button>
    </div>
  )
}

export default Button