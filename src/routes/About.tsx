import { type FC } from 'react';
import Contact from './components/Contact';
import Container from './components/Container';
import Hero from './components/Hero';
import Layout from './components/Layout';
import PageBody from './components/PageBody';
import TwoColumn from './components/TwoColumn';

const About: FC = () => {
  return (
    <Layout>
      <Container>
        <Hero title="About" subtitle="概要" />
        <TwoColumn>
          <TwoColumn type="main">
            <PageBody>
              <p>
                自分が勉強した内容を記事の形式で残していくためのサイトです。更新は不定期です。
              </p>
              <h2> このサイトについて </h2>
              Vite+React+TSで作成したものをGithub
              Pagesにデプロイしています。そのうちNext.jsを使って作り直すかもしれません。
              <h3> 勉強したいこと </h3>
              <p>
                ジャンルで言うと、物理、数学、数理最適化、アルゴリズム、機械学習、その他いろいろ。このサイトの運用記録も記事にして残しておくつもりです。
              </p>
              <h3> 読んでくださる方へ </h3>
              <p>
                自分も勉強中の身なので、記事に疑問を疑問のまま書き残したり、あるいは間違いを残すことがあると思います。気になる点がありましたら、このサイトを管理しているRepogitoryにIssueを立てるか（こちらを推奨）、TwitterのDMに連絡をください。{' '}
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

export default About;
