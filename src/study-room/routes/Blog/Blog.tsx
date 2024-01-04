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
  return (
    <>
      <Helmet>
        <meta
          property="og:url"
          content="https://aktardigrade13.github.io/study-room/blog"
        />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="blog" />
        <meta property="og:description" content="blog" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={study} />
      </Helmet>
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
