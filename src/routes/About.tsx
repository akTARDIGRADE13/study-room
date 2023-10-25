import { type FC } from 'react';
import Hero from './components/Hero';
import Layout from './components/Layout';

const About: FC = () => {
  return (
    <Layout>
      <Hero title="About" subtitle="概要" />
    </Layout>
  );
};

export default About;
