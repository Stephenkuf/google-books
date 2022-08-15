import { BookItem } from 'components/BookItem/BookItem';
import styles from './BooksGrid.module.css'

export const BooksGrid = () => {
  return (
    <ul className={styles['book__grid']}>
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
    </ul>
  )
}
