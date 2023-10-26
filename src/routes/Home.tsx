import { type FC } from 'react';
import Container from './components/Container';
import Hero from './components/Hero';
import Layout from './components/Layout';

const Home: FC = () => {
  return (
    <Layout>
      <Container>
        <Hero title="Home" subtitle="アウトプットしていくサイト" imageOn />
      </Container>
    </Layout>
  );
};

export default Home;
