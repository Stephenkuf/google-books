import { FC } from 'react';
import { BookItem } from 'components/BookItem/BookItem';
import { IBook } from 'services/books/Books.model';
import styles from './BooksGrid.module.css'

interface IBooksGridProps {
  books: IBook[];
  readingList: IBook[];
  updateReadingList: (books: IBook[]) => void;
}

export const BooksGrid: FC<IBooksGridProps> = ({ books, readingList, updateReadingList }) => {  
  return (
    <ul className={styles['book__grid']}>
      {books.map((book) => (
        <BookItem 
          key={book.id} 
          book={book} 
          checked={readingList.some(b => b.id === book.id)}
          updateReadingList={updateReadingList}
          readingList={readingList}
        />
      ))}
    </ul>
  )
}
