import React from 'react';
import CSS from './statistics.module.css';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ stats, title }) => {
  return (
    <section className={CSS.statistics}>
      {title && <h2 className={CSS.title}>{title}</h2>}
      <ul className={CSS.stat_list}>
        {stats.map(stat => (
          <li
            className={CSS.item}
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={CSS.label}>{stat.label}</span>
            <span className={CSS.percentage}> {stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
