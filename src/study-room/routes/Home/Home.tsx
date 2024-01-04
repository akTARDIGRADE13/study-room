import { type FC } from 'react';
import { Helmet } from 'react-helmet';
import study from 'study-room/images/study.jpg';
import Contact from 'study-room/routes/components/Contact';
import Container from 'study-room/routes/components/Container';
import Hero from 'study-room/routes/components/Hero';
import Layout from 'study-room/routes/components/Layout';
import PageBody from 'study-room/routes/components/PageBody';
import TwoColumn from 'study-room/routes/components/TwoColumn';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const Home: FC = () => {
  const domain = 'https://aktardigrade13.github.io/study-room';
  const homeUrl = '/';
  const mainText = 'home';

  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: mainText },
          { property: 'og:title', content: title },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: `${domain}${homeUrl}/` },
          { property: 'og:image', content: `${study}` },
          { property: 'og:description', content: mainText },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:image', content: `${study}` },
        ]}
      />
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
    </>
  );
};

export default Home;
