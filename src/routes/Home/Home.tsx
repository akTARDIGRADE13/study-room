import { type FC } from 'react';
import Contact from 'routes/components/Contact';
import Container from 'routes/components/Container';
import Hero from 'routes/components/Hero';
import Layout from 'routes/components/Layout';
import PageBody from 'routes/components/PageBody';
import TwoColumn from 'routes/components/TwoColumn';

const Home: FC = () => {
  return (
    <Layout>
      <Container>
        <Hero title="Home" subtitle="" imageOn />
        <TwoColumn>
          <TwoColumn type="main">
            <PageBody>
              <h1> 概要 </h1>
              <p>
                自分が勉強した内容を記事の形式で残していくためのサイトです。更新は不定期です。
              </p>
              <h2> このサイトについて </h2>
              Vite+React+TSで作成したものをGithub
              Pagesにデプロイしています。そのうちNext.jsを使って作り直すかもしれません。
              <h2> 勉強したいこと </h2>
              <p>
                ジャンルで言うと、物理、数学、数理最適化、アルゴリズム、機械学習、その他いろいろ。このサイトの運用記録も記事にして残しておくつもりです。
              </p>
              <h2> 読んでくださる方へ </h2>
              <p>
                記事の誤植や内容の誤り等、何か気づいた点がございましたら、このサイトを管理しているリポジトリにIssueを立てるか、DMでご連絡いただけますと幸いです。
              </p>
            </PageBody>
          </TwoColumn>
          <TwoColumn type="sidebar">
            <Contact />
          </TwoColumn>
        </TwoColumn>
      </Container>
    </Layout>
  );
};

export default Home;
