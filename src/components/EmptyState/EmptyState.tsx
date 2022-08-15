import { FC, ReactNode } from 'react'
import NoContentImage from 'assets/images/no-content.svg'
import styles from "./EmptyState.module.css"

interface IEmptyStateProps {
  title: ReactNode
}

export const EmptyState: FC<IEmptyStateProps> = ({ title }) => {
  return (
    <div className={styles["empty__state-wrapper"]}>
      <img src={NoContentImage} height="280" width="500" alt="not found" />
      <h3 className={styles['empty__state-title']}>
        {title}
      </h3>
    </div>
  )
}
