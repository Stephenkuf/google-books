import { FC, useState, FormEvent, useEffect } from 'react'
import { SearchForm } from 'components/Forms/SearchForm/SearchForm'
import { Container } from 'components/Container/Container'
import { BooksGrid } from 'components/BooksGrid/BooksGrid'
import styles from './Search.module.css'
import { Spinner } from 'components/Spinner/Spinner'
import { EmptyState } from 'components/EmptyState/EmptyState'
import { booksService } from 'services/books/Books.service'
import { IBook } from 'services/books/Books.model';
import { useReadingList } from 'hooks/useReadingList/useReadingList'


export const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState('popcorn')
  const [searchResult, setSearchResult] = useState<{ books: IBook[], query: string }>({
    books: [],
    query: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const { readingList, updateReadingList } = useReadingList();

  const handleSearch = async (e: FormEvent<HTMLFormElement> | null) => {
    if(isLoading) return
    e && e.preventDefault()
    setIsLoading(true)
    setSearchResult({ books: [], query: '' })
    try {
      const { items } = await booksService.searchBooks({ q: searchTerm })
      setSearchResult({
        books: items ?? [],
        query: searchTerm
      })
    } catch (error) {
      console.log('error', error)
    } finally {
      setIsLoading(false);
      setSearchTerm('')
    }
  }

  useEffect(() => {
    handleSearch(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderMainContent = () => {
    return searchResult.books.length > 0 ? (
      <>
        <h1 className={styles['search__result-title']}>
          Showing results for <span>{searchResult.query}</span>
        </h1>
        <BooksGrid 
          books={searchResult.books}
          readingList={readingList}
          updateReadingList={updateReadingList} 
        />
      </>
    ) : (
      <EmptyState title={<>No results for <strong>{searchResult.query}</strong>, kindly try another query</>} />
    )
  }

  return (
    <>
      <Container>
        <SearchForm
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSubmit={handleSearch}
          isLoading={isLoading}
        />
        {isLoading ? <Spinner /> : (
          <>
            {renderMainContent()}
          </>
        )}
      </Container>
    </>
  )
}
