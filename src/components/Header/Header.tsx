import { Container } from 'components/Container/Container';
import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header: FC = () => {
  return (
    <header>
      <Container>
        <nav className={styles["main__nav"]}>
          <NavLink to="/" className={styles["nav__brand"]}>
            <h5>BookList</h5>
          </NavLink>
          <div className={styles["nav__links"]}>
            <NavLink 
              to="/"
              className={({ isActive }) =>
                [styles["nav__item"], isActive ? styles["nav__item-active"] : null].filter(Boolean).join(' ')
              }
            >Search</NavLink>
            <NavLink
              to="reading-list"
              className={({ isActive }) =>
                [styles["nav__item"], isActive ? styles["nav__item-active"] : null].filter(Boolean).join(' ')
              }
            >Reading List</NavLink>
          </div>
        </nav>
      </Container>
    </header>
  )
}
