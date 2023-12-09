import type React from 'react';
import { useParams } from 'react-router-dom';

const BlogCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  // カテゴリーに対応する記事データを取得するロジック

  return (
    <div>
      {/* カテゴリーの記事のアイキャッチ一覧を表示するコンポーネント */}
      <h1>{category} Category</h1>
    </div>
  );
};

export default BlogCategory;
