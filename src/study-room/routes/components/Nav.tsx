import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { categoryNames } from 'study-room/Categories';
import styles from './Nav.module.css';

const Nav: FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink
          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
          to="/study-room/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
          to="/study-room/blog"
        >
          Blog
        </NavLink>
      </li>
      {/* カテゴリー名に基づいて動的にNavLinkを生成 */}
      {categoryNames.map((category, index) => (
        <li key={index}>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
            to={`/study-room/blog/${category}`}
          >
            {category}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
