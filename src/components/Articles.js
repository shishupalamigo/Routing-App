import React from 'react';
import { NavLink } from 'react-router-dom';

class Articles extends React.Component {
  render(props) {
    let articles = this.props.data;
    return (
      <main className="w-2/3 border-2 h-screen">
        <ul className="flex flex-col justify-between h-screen">
          {articles.map((article) => {
            return (
              <li
                key={article.slug}
                className="text-xl m-10 text-blue-600 hover:text-red-600"
              >
                <NavLink to={`/article/${article.slug}`}>
                  {article.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Articles;
