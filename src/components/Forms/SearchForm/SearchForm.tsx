import { FC , FormEvent, SetStateAction, Dispatch} from 'react';
import { Input } from 'components/Forms/Shared/Input/Input'
import styles from './SearchForm.module.css'

interface SearchFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void,
  setSearchTerm: Dispatch<SetStateAction<string>>,
  searchTerm: string;
  isLoading: boolean;
}

export const SearchForm: FC<SearchFormProps> = (props) => {
  const { onSubmit, setSearchTerm, searchTerm, isLoading } = props
  return (
    <form className={styles['search__form']} onSubmit={onSubmit}>
      <Input 
        type="search"
        name="search"
        placeholder="Search for books..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className={styles['search__button']} disabled={!searchTerm.length || isLoading}>Search</button>
    </form>
  )
}
