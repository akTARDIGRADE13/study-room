import { type FC } from 'react';
import styles from './TwoColumn.module.css';

interface TwoColumnProps {
  children: React.ReactNode;
  type?: 'main' | 'sidebar';
}

const TwoColumn: FC<TwoColumnProps> = ({ children, type }) => {
  const columnClassName =
    type === 'main'
      ? styles.main
      : type === 'sidebar'
      ? styles.sidebar
      : styles['flex-container'];

  return <div className={columnClassName}> {children}</div>;
};

export default TwoColumn;
