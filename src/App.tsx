import { type FC } from 'react';
import { Routes, Route } from 'react-router-dom';
// import About from 'routes/About/About';
import Blog from 'routes/Blog/Blog';
import BlogArticle from 'routes/Blog/BlogCategory/BlogArticle/BlogArticle';
import BlogCategory from 'routes/Blog/BlogCategory/BlogCategory';
import Home from 'routes/Home/Home';
import NotFound from 'routes/NotFound/NotFound';
import './App.css';

const category1: string = import.meta.env.CATEGORY_PHYSICS;
const category2: string = import.meta.env.CATEGORY_MATHEMATICS;
const category3: string = import.meta.env.CATEGORY_PROGRAMMING;
const category4: string = import.meta.env.CATEGORY_MATHEMATICAL_OPTIMIZATION;
const category5: string = import.meta.env.CATEGORY_OTHER;
console.dir(import.meta.env);

const categoryNames: string[] = [
  category1,
  category2,
  category3,
  category4,
  category5,
];

const App: FC = () => {
  // const routeCategories: React.ReactNode = categoriesNames.map(
  //   (item, index) => <Route key={index} path={`${item}`} element={<Blog />} />,
  // );

  return (
    <div>
      <Routes>
        <Route path="/study-room/" element={<Home />} />
        {/* <Route path="/study-room/about" element={<About />} /> */}
        <Route
          path="/study-room/blog/"
          element={<Blog categoryNames={categoryNames} />}
        />
        <Route path="/blog/:category" element={<BlogCategory />} />
        <Route path="/blog/:category/:id" element={<BlogArticle />} />

        <Route path="/study-room/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
