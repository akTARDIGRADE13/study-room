import { type FC } from 'react';
import study from 'images/study.jpg';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  imageOn?: boolean;
}

const Hero: FC<HeroProps> = ({ title, subtitle, imageOn = false }) => {
  const getImageWidth = () => {
    const windowWidth = window.innerWidth;

    return windowWidth >= 1152
      ? '576px'
      : windowWidth >= 768
      ? '50vw'
      : '100vw';
  };

  return (
    <div className={styles['flex-container']}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <img
            src={study}
            height={'auto'}
            alt="STUDY"
            style={{
              width: getImageWidth(),
              maxWidth: '576px', // 最大幅
            }}
          />
        </figure>
      )}
    </div>
  );
};

export default Hero;
