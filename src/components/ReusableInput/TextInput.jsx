import styles from './styles.module.css';

const TextInput = ({name,icon,value,placeholder,Icon,onChange}) => {
  return (
    <div className={`${styles.text_input} relative`}>
        {
            icon ? <Icon className="absolute left-3 top-4"/> : ''
        }
        <input name={name} value={value} placeholder={placeholder} type='text' className={icon && styles.icon} onChange={onChange}/>
    </div>
  )
}

export default TextInput