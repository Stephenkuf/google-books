import { useState, useEffect } from 'react';
import { IBook } from 'services/books/Books.model';


export const useReadingList = () => {
  const [readingList, setReadingList] = useState<IBook[]>([]);
  
  useEffect(() => {
    const list = localStorage.getItem('readingList') ? JSON.parse(localStorage.getItem('readingList') as string) : []
    setReadingList(list);
  }, []);

  const updateReadingList = (books: IBook[]) => {
    localStorage.setItem('readingList', JSON.stringify(books));
    setReadingList(books);
  }

  return {
    readingList,
    updateReadingList,
  }
}
