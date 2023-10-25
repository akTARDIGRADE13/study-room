import { type FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from 'routes/About';
import Blog from 'routes/Blog';
import Home from 'routes/Home';
import NotFound from 'routes/NotFound';
import './App.css';

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/study-room/" element={<Home />} />
        <Route path="/study-room/about" element={<About />} />
        <Route path="/study-room/blog" element={<Blog />} />
        <Route path="/study-room/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
