import type React from 'react';
import { Link } from 'react-router-dom';
import { type Article } from 'study-room/types/Article';
import styles from './RenderArticleInfo.module.css';

// パスを正規化するヘルパー関数
const normalizePath = (path: string): string => {
  const parts = path.split('/');
  const normalizedParts = parts.filter((part) => part !== '.' && part !== '..');

  return normalizedParts.join('/');
};

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

  // eyecatchImages から対応するファイルのパスを見つける
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
          {eyecatchImagePath !== undefined && eyecatchImagePath !== null ? (
            <img
              className={styles['article-image']}
              src={`${
                process.env.NODE_ENV === 'production'
                  ? '/study-room/'
                  : '/src/study-room/'
              }${normalizePath(eyecatchImagePath)}`}
              alt={article.title}
            />
          ) : (
            <p>No Image Found</p>
          )}
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
