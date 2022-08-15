import { PropsWithChildren, FC } from 'react'
import styles from "./Container.module.css"

export const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles['container']}>{children}</div>
  )
}
