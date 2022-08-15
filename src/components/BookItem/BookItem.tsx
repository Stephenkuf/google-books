import { Checkbox } from 'components/Forms/Shared/Checkbox/Checkbox'
import { FC } from 'react'
import styles from './BookItem.module.css'


export const BookItem: FC = () => {
  return (
    <li className={styles['book__item']}>
      <img
        src="http://books.google.com/books/content?id=qez48U60T5oC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        alt="olajidetunde" 
        className={styles['book__cover']} 
      />
      <ul className={styles['book__info']}>
        <li>
          <span className={styles['header']}>Author</span>
          <span className={styles['content']}>Divided School</span>
        </li>
        <li>
          <span className={styles['header']}>Publisher</span>
          <span className={styles['content']}>Divided School</span>
        </li>
        <li>
          <span className={styles['header']}>Title</span>
          <span className={styles['content']}>Divided School</span>
        </li>
        <li className={styles['toggle__reading-list']}>
          <Checkbox />
        </li>
      </ul>
    </li>
  )
}
