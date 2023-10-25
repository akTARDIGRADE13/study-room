import { type FC } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from 'routes/About';
import Blog from 'routes/Blog';
import Home from 'routes/Home';
import NotFound from 'routes/NotFound';
import './App.css';

const App: FC = () => {
  return (
    <div>
      <h1>Hello React Router</h1>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to="./"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to="./about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to="./blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="./" element={<Home />} />
        <Route path="./about" element={<About />} />
        <Route path="./blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
