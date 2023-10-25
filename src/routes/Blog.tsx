import { type FC } from 'react';
import Hero from './components/Hero';
import Layout from './components/Layout';

const Blog: FC = () => {
  return (
    <Layout>
      <Hero title="Blog" subtitle="最近の記事" />
    </Layout>
  );
};

export default Blog;
