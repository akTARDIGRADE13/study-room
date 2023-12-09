import type React from 'react';
import { useEffect } from 'react';
import useArticleData from 'routes/Blog/fooks/useArticleData';
import RenderArticleInfo from 'routes/Blog/components/RenderArticleInfo';
import styles from './RecentArticles.module.css';

const RecentArticles: React.FC<{ n: number }> = ({ n }) => {
  const articles = useArticleData();

  useEffect(() => {
    // Add any additional logic or side effects related to YourComponent
    // This useEffect runs when articles change
  }, [articles]);

  const renderRecentArticles = () => (
    <div className={styles['article-container']}>
      {articles
        .slice(0, Math.min(n, articles.length))
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
