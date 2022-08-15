import React from 'react'
import { Container } from 'components/Container/Container'
import { BooksGrid } from 'components/BooksGrid/BooksGrid'
import { EmptyState } from 'components/EmptyState/EmptyState'

export const ReadingList = () => {
  return (
    <Container>
      <BooksGrid />
      <EmptyState title="No Books Available in reading lists yet!" />
    </Container>
  )
}
