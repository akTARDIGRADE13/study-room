import { type FC } from 'react';
import Social from './Social';
import styles from './Contact.module.css';

const Contact: FC = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social />
      <address> hogehoge </address>
    </div>
  );
};

export default Contact;
