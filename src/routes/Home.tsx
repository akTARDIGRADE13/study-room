import { type FC } from 'react';
import Hero from './components/Hero';
import Layout from './components/Layout';

const Home: FC = () => {
  return (
    <Layout>
      <Hero title="Home" subtitle="アウトプットしていくサイト" imageOn />
    </Layout>
  );
};

export default Home;
