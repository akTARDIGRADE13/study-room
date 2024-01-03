import { type FC } from 'react';
import { Link } from 'react-router-dom';
import RecentArticles from './RecentArticles';
import styles from './RecentArticlesByCategory.module.css';

interface RecentArticlesByCategoryProps {
  category: string;
}

const RecentArticlesByCategory: FC<RecentArticlesByCategoryProps> = ({
  category,
}) => (
  <div className={styles.container}>
    {/* リンクを追加 */}
    <Link
      to={`/study-room/blog/${category}`}
      className={styles['category-link']}
    >
      <h2 className={styles['category-title']}>{category}</h2>
    </Link>
    <RecentArticles n={3} category={category} />
  </div>
);

export default RecentArticlesByCategory;
