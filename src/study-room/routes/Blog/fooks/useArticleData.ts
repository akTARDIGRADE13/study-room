// useArticleData.js
import { useState, useEffect } from 'react';
import { articles } from 'study-room/articles/Data';
import { type Article } from 'study-room/types/Article';

const useArticleData = (): Article[] => {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const sortedArticles = articles
          .filter((article: Article) => {
            // `article` が `Article` 型であることを確認
            if (typeof article === 'object' && article !== null) {
              // `article.publishDate` が存在し、かつ `string` 型であることを確認
              if (
                'publishDate' in article &&
                typeof article.publishDate === 'string'
              ) {
                const publishDate = new Date(article.publishDate);

                return article.publish && !isNaN(publishDate.getTime());
              }
            }

            return false; // 上記の条件に該当しない場合は `false` を返す
          })
          .sort(
            (a: Article, b: Article) =>
              +new Date(b.publishDate) - +new Date(a.publishDate),
          );

        setFilteredArticles(sortedArticles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return filteredArticles;
};

export default useArticleData;
