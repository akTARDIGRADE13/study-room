import type React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'study-room/routes/components/Container';
import Hero from 'study-room/routes/components/Hero';
import Layout from 'study-room/routes/components/Layout';
import RecentArticles from '../components/RecentArticles';

const BlogCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  // カテゴリーに対応する記事データを取得するロジック

  return (
    <Layout>
      <Container>
        <Hero title="Blog" subtitle={category ?? 'Default Subtitle'} />

        <RecentArticles n={100000} category={category} />
      </Container>
    </Layout>
  );
};

export default BlogCategory;
