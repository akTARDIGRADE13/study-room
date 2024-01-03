import { type FC } from 'react';
import { Routes, Route } from 'react-router-dom';
// import About from 'routes/About/About';
import Blog from 'study-room/routes/Blog/Blog';
import BlogArticle from 'study-room/routes/Blog/BlogCategory/BlogArticle/BlogArticle';
import BlogCategory from 'study-room/routes/Blog/BlogCategory/BlogCategory';
import Home from 'study-room/routes/Home/Home';
import NotFound from 'study-room/routes/NotFound/NotFound';
import './App.css';

const App: FC = () => {
  // const routeCategories: React.ReactNode = categoriesNames.map(
  //   (item, index) => <Route key={index} path={`${item}`} element={<Blog />} />,
  // );

  return (
    <div>
      <Routes>
        <Route path="/study-room/" element={<Home />} />
        {/* <Route path="/study-room/about" element={<About />} /> */}
        <Route path="/study-room/blog/" element={<Blog />} />
        <Route path="/study-room/blog/:category" element={<BlogCategory />} />
        <Route
          path="/study-room/blog/:category/:md"
          element={<BlogArticle />}
        />

        <Route path="/study-room/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
