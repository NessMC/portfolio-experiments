import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../context/ArticleContext";
import Fuse from 'fuse.js';
import { ArticleCard } from "../pages/blog/Blog";

const searchForArticle = (article, articles) => {
  const options = {
    includeScore: true,
    keys: ['title', 'author', 'description', 'slug', 'tags'],
  };

  const fuse = new Fuse(articles, options);
  return fuse.search(article);
}

export const Search = () => {
  const { articles, setResultState } = useContext(ArticleContext);
  const [ input, setInput ] = useState('');
  const [ results, setResults ] = useState([]);
  useEffect(() => {
    if (input.length > 0) {
      setResults(searchForArticle(input, articles));
      if (results && results.length > 0) setResultState(true);
      else setResultState(false);
    } else {
      setResultState(false);
      setResults([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return <div className="px-8 my-8 lg:px-0">
    <input type="text" className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-white py-2 px-4 w-full lg:w-96 rounded-xl focus:outline-none" onKeyDown={(e) => setInput(e.target.value)} placeholder="Rechercher un article..." />
    {articles && results && results.length > 0 && (
      <ul className="m-6 space-y-8 lg:space-y-0 lg:gap-8 flex flex-col lg:flex-row lg:children:w-[48%] lg:mx-0 flex-wrap">
        {results.map(({ item }, i) => <ArticleCard key={i} article={item} />)}
      </ul>
    )}
  </div>
};