import type React from 'react';
import { NavLink } from 'react-router-dom';
import { categoryNames } from 'study-room/Categories';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
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
      <li className={styles['category-name']}>
        <NavLink
          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
          to="/study-room/blog"
        >
          Blog
        </NavLink>
        <div className={styles['sub-menu-wrapper']}>
          <div className={styles['sub-menu']}>
            {/* カテゴリーごとのリンク */}
            {categoryNames.map((category, index) => (
              <NavLink
                key={index}
                style={({ isActive }) =>
                  isActive ? { color: 'blue' } : undefined
                }
                to={`/study-room/blog/${category}`}
              >
                {category}
              </NavLink>
            ))}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Nav;
