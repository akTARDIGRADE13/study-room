import { type FC } from 'react';
import { Link } from 'react-router-dom';
import RecentArticles from 'study-room/routes/Blog/components/RecentArticles';
import Container from 'study-room/routes/components/Container';
import Hero from 'study-room/routes/components/Hero';
import Layout from 'study-room/routes/components/Layout';

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
