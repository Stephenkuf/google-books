import { FC, useState } from 'react'
import { IBook } from 'services/books/Books.model';
import { Checkbox } from 'components/Forms/Shared/Checkbox/Checkbox'
import styles from './BookItem.module.css'

const notAvailableText = 'Not available'

interface IBookItemProps {
  book: IBook;
  checked: boolean;
  updateReadingList: (books: IBook[]) => void;
  readingList: IBook[];
}

export const BookItem: FC<IBookItemProps> = ({ book, checked, readingList, updateReadingList }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bookTitle = book.volumeInfo.title
    setIsChecked(e.target.checked)
    if (e.target.checked) {
      const formattedBook = {
        id: book.id,
        volumeInfo: {
          publisher: book.volumeInfo?.publisher ?? notAvailableText,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors ?? [notAvailableText],
          imageLinks: {
            thumbnail: book.volumeInfo.imageLinks?.thumbnail ?? ''
          }
        }
      }
      updateReadingList([{ ...formattedBook }, ...readingList])
      setTimeout(() => {
        alert(`${bookTitle} added to your reading list`)
      }, 700)
    } else {
      updateReadingList([...readingList].filter(b => b.id !== book.id))
      setTimeout(() => {
        alert(`${bookTitle} removed from your reading list`)
      }, 180)
    }
  }

  return (
    <li className={styles['book__item']}>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
        className={styles['book__cover']}
      />
      <ul className={styles['book__info']}>
        <li>
          <span className={styles['header']}>Title</span>
          <span className={styles['content']}>{book.volumeInfo.title}</span>
        </li>
        <li>
          <span className={styles['header']}>Author</span>
          <span className={styles['content']}>{book.volumeInfo.authors?.toString() ?? notAvailableText}</span>
        </li>
        <li>
          <span className={styles['header']}>Publishing company</span>
          <span className={styles['content']}>{book.volumeInfo.publisher ?? notAvailableText}</span>
        </li>
        <li className={styles['toggle__reading-list']}>
          <Checkbox
            onChange={handleCheckboxChange}
            id={book.id}
            checked={isChecked}
            label={`${isChecked ? 'Remove from' : 'Add to'} reading list`}
          />
        </li>
      </ul>
    </li>
  )
}
