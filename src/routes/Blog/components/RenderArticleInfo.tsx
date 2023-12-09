import type React from 'react';
import { Link } from 'react-router-dom';
import { type Article } from 'articles/Article';
import styles from './RenderArticleInfo.module.css';

const RenderArticleInfo: React.FC<{ article: Article }> = ({ article }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // スタイルの確認
  console.log(styles.articleCard);

  return (
    <Link
      to={`/${article.category}/${article.id}`}
      className={styles['article-link']}
    >
      <div className={styles['article-card']}>
        <div className={styles['article-image-container']}>
          <img
            className={styles['article-image']}
            src={article.eyecatch}
            alt={article.title}
          />
        </div>
        <div
          className={`${styles['article-details']} ${styles['side-by-side-center']}`}
        >
          <h2 className={styles['article-title']}>{article.title}</h2>
          <p className={styles['article-date']}>
            {formatDate(article.publishDate)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RenderArticleInfo;
