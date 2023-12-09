// useArticleData.js
import { useState, useEffect } from 'react';
import { type Article } from '../../../Article';

const useArticleData = (): Article[] => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: { default: Article[] } = await import(
          '../../../../articles/articles.json'
        );
        const sortedArticles = data.default
          .filter((article) => article.publish)
          .sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

        setArticles(sortedArticles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData().catch((error) => {
      console.error('Error in fetchData:', error);
    });
  }, []);

  return articles;
};

export default useArticleData;
