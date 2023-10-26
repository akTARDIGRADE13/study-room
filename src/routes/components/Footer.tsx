import { type FC } from 'react';
import Container from './Container';
import Logo from './Logo';
import Social from './Social';
import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles['flex-container']}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
