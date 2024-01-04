import type React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';
import { articles } from 'study-room/Data';
import Container from 'study-room/routes/components/Container';
import Hero from 'study-room/routes/components/Hero';
import Layout from 'study-room/routes/components/Layout';
import CodeBlock from './components/CodeBlock';
import MdImage from './components/MdImage';
import { useMdContent } from './hooks/useMdContent';
import styles from './BlogArticle.module.css';
import 'katex/dist/katex.min.css';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const BlogArticle: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();

  const articleId = parseInt(id ?? '0', 10);
  const selectedArticle = articles.find((article) => article.id === articleId);

  useEffect(() => {
    if (!selectedArticle) {
      console.error(`Article with id '${id}' not found.`);
      // Handle the error or redirect to a 404 page.
    }
  }, [id, selectedArticle]);

  const mdPath = selectedArticle
    ? `${
        process.env.NODE_ENV === 'production' ? '/study-room' : ''
      }/articles/md/${selectedArticle.md}`
    : null;

  const markdownContent = useMdContent(mdPath ?? '');
  const eyecatchImagePath = `${
    process.env.NODE_ENV === 'production' ? '/study-room' : ''
  }/articles/eyecatch/${selectedArticle?.eyecatch}`;

  return (
    <>
      <Helmet>
        <meta
          property="og:url"
          content={`https://aktardigrade13.github.io/study-room/${category}/${id}`}
        />
        <meta property="og:type" content={`article`} />
        <meta property="og:title" content={`${selectedArticle?.title}`} />
        <meta property="og:description" content={`blog-category${category}`} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={eyecatchImagePath} />
      </Helmet>
      <Layout>
        <Container>
          <Hero title="Blog" subtitle={category ?? 'Default Subtitle'} />
          {selectedArticle && (
            <div className={styles['article-wrapper']}>
              <h1 className={styles['article-title']}>
                {selectedArticle.title}
              </h1>

              <ReactMarkdown
                remarkPlugins={[
                  remarkMath,
                  remarkGfm,
                  [remarkToc, { maxDepth: 2, heading: '目次' }],
                ]}
                rehypePlugins={[rehypeKatex, rehypeSlug]}
                components={{
                  pre: (props) => <CodeBlock {...props} />,
                  img: (props) => <MdImage {...props} />,
                }}
                className={styles.content}
              >
                {markdownContent}
              </ReactMarkdown>
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default BlogArticle;
