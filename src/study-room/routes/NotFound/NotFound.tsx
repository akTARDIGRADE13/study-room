import { type FC } from 'react';
import { Helmet } from 'react-helmet';
import styles from './NotFound.module.css';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const NotFound: FC = () => {
  const domain = 'https://aktardigrade13.github.io/study-room';
  const homeUrl = '/NotFound';
  const mainText = 'NotFound';

  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: mainText },
          { property: 'og:title', content: title },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: `${domain}${homeUrl}/` },
          { property: 'og:description', content: mainText },
          { name: 'twitter:card', content: 'summary_large_image' },
        ]}
      />
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
