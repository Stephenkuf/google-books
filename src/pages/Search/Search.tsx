import { SearchForm } from 'components/Forms/SearchForm/SearchForm'
import { Container } from 'components/Container/Container'
import { FC } from 'react'
import { BooksGrid } from 'components/BooksGrid/BooksGrid'
import styles from './Search.module.css'
import { Spinner } from 'components/Spinner/Spinner'
import { EmptyState } from 'components/EmptyState/EmptyState'


export const Search: FC = () => {
  return (
    <>
      <Container>
        <SearchForm />
        <h2 className={styles['search__result-title']}>Showing results for <span>Nigeria</span></h2>
        <BooksGrid />
        <Spinner />
        <EmptyState title={<>No results for <strong>Iiiiiiiiuiui88898989</strong>, kindly try another query</>} />
      </Container>
    </>
  )
}
