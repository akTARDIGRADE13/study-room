import { type FC } from 'react';
import { Link } from 'react-router-dom';
import RecentArticles from 'routes/Blog/components/RecentArticles';
import Container from 'routes/components/Container';
import Hero from 'routes/components/Hero';
import Layout from 'routes/components/Layout';

interface BlogProps {
  categoryNames: string[];
}

const Blog: FC<BlogProps> = ({ categoryNames }) => {
  const linkCategories: React.ReactNode = categoryNames.map((item, index) => (
    <li key={index}>
      <Link to="/study-room/">{item}</Link>
    </li>
  ));

  return (
    <Layout>
      <Container>
        <Hero title="Blog" subtitle="最近の記事" />
      </Container>
      <RecentArticles n={3} />
      <ul>{linkCategories}</ul>
    </Layout>
  );
};

export default Blog;
