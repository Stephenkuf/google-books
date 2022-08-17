import { Container } from 'components/Container/Container'
import { BooksGrid } from 'components/BooksGrid/BooksGrid'
import { EmptyState } from 'components/EmptyState/EmptyState'
import { useReadingList } from 'hooks/useReadingList/useReadingList'

export const ReadingList = () => {
  const { readingList, updateReadingList } = useReadingList();

  return (
    <Container>
      {readingList.length > 0 ? (
        <>
          <h1>
            Books you plan to read &#128515;
          </h1>
          <BooksGrid books={readingList} readingList={readingList} updateReadingList={updateReadingList} />
        </>
      ) : (
        <EmptyState title="No books in your reading list yet!!" />
      )}
    </Container>
  )
}
