import { type FC } from 'react';
import Container from './Container';
import Logo from './Logo';
import Nav from './Nav';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header>
      <Container large>
        <div className={styles['flex-container']}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
