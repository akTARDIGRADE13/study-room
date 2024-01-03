import type React from 'react';
import { Link } from 'react-router-dom';
import { type Article } from 'study-room/types/Article';
import styles from './RenderArticleInfo.module.css';

// 画像を一括で読み込む
const eyecatchContext = import.meta.glob('../../../images/eyecatch/*.jpg');

// eyecatchContext からパスの一覧を取得
const eyecatchImages: string[] = Object.keys(eyecatchContext);

const RenderArticleInfo: React.FC<{ article: Article }> = ({ article }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const eyecatchImagePath: string | undefined = eyecatchImages.find(
    (path: string) => path.endsWith(article.eyecatch),
  );

  return (
    <Link
      to={`/study-room/blog/${article.category}/${article.id}`}
      className={styles['article-link']}
    >
      <div className={styles['article-card']}>
        <div className={styles['article-image-container']}>
          <img
            className={styles['article-image']}
            src={`${eyecatchImagePath}`}
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
