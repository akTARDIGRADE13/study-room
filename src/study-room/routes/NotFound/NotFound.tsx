import { type FC } from 'react';
import { Helmet } from 'react-helmet';
import styles from './NotFound.module.css';

const NotFound: FC = () => {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="NotFound" />
        <meta
          property="og:description"
          content="お探しのページが見つかりませんでした"
        />
        <meta
          property="og:url"
          content="https://aktardigrade13.github.io/study-room/NotFound"
        />
        <meta property="og:type" content="NotFound" />
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>404 Not Found</h1>
        <p className={styles.message}>
          お探しのページが見つかりませんでした。
          <br />
          URLが間違っているか、削除された可能性があります。
        </p>
      </div>
    </>
  );
};

export default NotFound;
