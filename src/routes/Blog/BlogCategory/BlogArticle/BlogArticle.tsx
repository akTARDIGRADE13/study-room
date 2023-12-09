import type React from 'react';
import { useParams } from 'react-router-dom';

const BlogArticle: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();

  // カテゴリーと記事IDに対応する記事データを取得するロジック

  return (
    <div>
      {/* 記事の詳細を表示するコンポーネント */}
      <h1>
        {category} Category - Post ID: {id}
      </h1>
    </div>
  );
};

export default BlogArticle;
