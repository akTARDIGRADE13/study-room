import { type FC } from 'react';
import { categoryNames } from 'study-room/Categories';
import Container from 'study-room/routes/components/Container';
import Hero from 'study-room/routes/components/Hero';
import Layout from 'study-room/routes/components/Layout';
import RecentArticlesByCategory from './components/ RecentArticlesByCategory';

import styles from './Blog.module.css';

const Blog: FC = () => {
  return (
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
  );
};

export default Blog;
