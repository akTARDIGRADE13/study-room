import { type FC } from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header: FC = () => {
  return (
    <header>
      <Logo boxOn />
      <Nav />
    </header>
  );
};

export default Header;
