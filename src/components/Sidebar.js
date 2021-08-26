import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-1/4 h-screen border-2">
      <nav className="m-10">
        <ul className="">
          <NavLink
            to="/"
            activeClassName="active text-white"
            className="text-white"
            exact
          >
            <li className="bg-blue-600 text-center p-3 text-white font-bold mb-5">
              Home
            </li>
          </NavLink>

          <NavLink to="/articles" activeClassName="active" exact>
            <li className="bg-blue-600 text-center p-3 text-white font-bold mb-5">
              Articles
            </li>
          </NavLink>

          <NavLink to="/help" activeClassName="active" exact>
            <li className="bg-blue-600 text-center p-3 text-white font-bold mb-5">
              Help
            </li>
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
