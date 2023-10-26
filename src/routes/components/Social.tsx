import { type FC } from 'react';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './Social.module.css';

interface SocialProps {
  iconSize?: string;
}

const Social: FC<SocialProps> = ({ iconSize = 'initial' }) => {
  return (
    <ul className={styles.list} style={{ ['--icon-size' as string]: iconSize }}>
      <li>
        <Link to={'https://twitter.com/akTARDIGRADE13'}>
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </Link>
      </li>
      <li>
        <Link to={'https://github.com/akTARDIGRADE13'}>
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </Link>
      </li>
    </ul>
  );
};

export default Social;
