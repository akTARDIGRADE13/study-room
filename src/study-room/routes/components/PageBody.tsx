import { type FC } from 'react';
import styles from './PageBody.module.css';

interface PageBodyProps {
  children: React.ReactNode;
}

const PageBody: FC<PageBodyProps> = (props) => {
  return <div className={styles.stack}> {props.children} </div>;
};

export default PageBody;
