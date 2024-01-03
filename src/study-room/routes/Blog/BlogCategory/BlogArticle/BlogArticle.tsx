import type React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import Container from 'study-room/routes/components/Container';
import Hero from 'study-room/routes/components/Hero';
import Layout from 'study-room/routes/components/Layout';
import { useMdContent } from './hooks/useMdContent';

const BlogArticle: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const paddedId = String(id).padStart(4, '0');
  const mdPath = `${
    process.env.NODE_ENV === 'production' ? '/study-room' : ''
  }/articles/md/${paddedId}.md`;

  const markdownContent = useMdContent(mdPath);

  return (
    <Layout>
      <Container>
        <Hero title="Blog" subtitle={category ?? 'Default Subtitle'} />
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </Container>
    </Layout>
  );
};

export default BlogArticle;
