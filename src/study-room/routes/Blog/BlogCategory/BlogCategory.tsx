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

  const domain = 'https://aktardigrade13.github.io/study-room';
  const homeUrl = `/blog/${category}`;
  const mainText = `blog/${category}`;

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
