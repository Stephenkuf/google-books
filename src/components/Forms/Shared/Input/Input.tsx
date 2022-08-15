import { FC, InputHTMLAttributes } from 'react'
import styles from './Input.module.css'


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInputProps> = (props) => {
  const { type, onChange, ...restProps} = props
  return (
    <input 
      type={type} 
      onChange={onChange} 
      {...restProps} 
      className={styles['input']} 
    />
  )
}
