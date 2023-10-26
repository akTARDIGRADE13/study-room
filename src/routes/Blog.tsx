import { type FC } from 'react';
import Container from './components/Container';
import Hero from './components/Hero';
import Layout from './components/Layout';

const Blog: FC = () => {
  return (
    <Layout>
      <Container>
        <Hero title="Blog" subtitle="最近の記事" />
      </Container>
    </Layout>
  );
};

export default Blog;
