import type React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import study from 'study-room/images/study.jpg';
import Container from 'study-room/routes/components/Container';
import Hero from 'study-room/routes/components/Hero';
import Layout from 'study-room/routes/components/Layout';
import RecentArticles from '../components/RecentArticles';
import styles from './BlogCategory.module.css';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const BlogCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  // カテゴリーに対応する記事データを取得するロジック

  return (
    <>
      <Helmet>
        <meta
          property="og:url"
          content={`https://aktardigrade13.github.io/study-room/${category}`}
        />
        <meta property="og:type" content="blog-category" />
        <meta property="og:title" content={`blog-${category}`} />
        <meta property="og:description" content={`blog-${category}`} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={study} />
      </Helmet>
      <Layout>
        <Container>
          <Hero title="Blog" subtitle={category ?? 'Default Subtitle'} />
          <div className={styles['category-wrapper']}>
            <RecentArticles n={100000} category={category} />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default BlogCategory;
