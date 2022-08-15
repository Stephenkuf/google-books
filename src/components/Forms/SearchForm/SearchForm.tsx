import { Input } from 'components/Forms/Shared/Input/Input'
import styles from './SearchForm.module.css'

export const SearchForm = () => {
  return (
    <form className={styles['search__form']}>
      <Input 
        type="search" 
        placeholder="Search for books..." 
      />
      <button type="submit" className={styles['search__button']}>Search</button>
    </form>
  )
}
