import { type FC } from 'react';
import study from 'study-room/images/study.jpg';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  imageOn?: boolean;
}

const Hero: FC<HeroProps> = ({ title, subtitle, imageOn = false }) => {
  return (
    <div className={styles['flex-container']}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles['image-container']}>
          <img
            className={styles.image}
            src={study}
            height={'auto'}
            alt="STUDY"
          />
        </figure>
      )}
    </div>
  );
};

export default Hero;
