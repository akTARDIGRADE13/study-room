import type React from 'react';
import { useEffect } from 'react';
import useArticleData from 'study-room/routes/Blog/hooks/useArticleData';
import RenderArticleInfo from 'study-room/routes/Blog/components/RenderArticleInfo';
import styles from './RecentArticles.module.css';

const RecentArticles: React.FC<{ n: number; category?: string }> = ({
  n,
  category,
}) => {
  const articles = useArticleData();

  useEffect(() => {
    // Add any additional logic or side effects related to YourComponent
    // This useEffect runs when articles change
  }, [articles]);

  const filteredArticles = articles.filter(
    (article) =>
      category === undefined || (article.category ?? '') === category,
  );

  const renderRecentArticles = () => (
    <div className={styles['article-container']}>
      {filteredArticles
        .slice(0, Math.min(n, filteredArticles.length))
        .map(
          (article) =>
            article.publish && (
              <RenderArticleInfo key={article.id} article={article} />
            ),
        )}
    </div>
  );

  return <>{renderRecentArticles()}</>;
};

export default RecentArticles;
