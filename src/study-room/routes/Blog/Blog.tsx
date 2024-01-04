import { type FC } from 'react';
import { Helmet } from 'react-helmet';
import study from 'study-room/images/study.jpg';
import { categoryNames } from 'study-room/Categories';
import Container from 'study-room/routes/components/Container';
import Hero from 'study-room/routes/components/Hero';
import Layout from 'study-room/routes/components/Layout';
import RecentArticlesByCategory from './components/ RecentArticlesByCategory';

import styles from './Blog.module.css';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const Blog: FC = () => {
  const domain = 'https://aktardigrade13.github.io/study-room';
  const homeUrl = '/blog';
  const mainText = 'blog';

  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: mainText },
          { property: 'og:title', content: title },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: `${domain}${homeUrl}/` },
          { property: 'og:image', content: `${study}` },
          { property: 'og:description', content: mainText },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:image', content: `${study}` },
        ]}
      />
      <Layout>
        <Container>
          <Hero title="Blog" subtitle="最近の記事" />

          {categoryNames.map((category, index) => (
            <div key={index} className={styles['category-block']}>
              <RecentArticlesByCategory category={category} />
            </div>
          ))}
        </Container>
      </Layout>
    </>
  );
};

export default Blog;
