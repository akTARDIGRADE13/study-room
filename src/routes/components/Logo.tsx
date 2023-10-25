import { type FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

interface LogoProps {
  boxOn: boolean;
}

const Logo: FC<LogoProps> = ({ boxOn = false }) => {
  return (
    <Link to="/study-room/" className={boxOn ? styles.box : styles.basic}>
      {title}
    </Link>
  );
};

export default Logo;
