import { type FC } from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  imageOn?: boolean;
}

const Hero: FC<HeroProps> = ({ title, subtitle, imageOn = false }) => {
  return (
    <div className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      {imageOn && <figure> [画像] </figure>}
    </div>
  );
};

export default Hero;
