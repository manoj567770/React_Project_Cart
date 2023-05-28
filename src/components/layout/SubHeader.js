import { NavLink } from "react-router-dom";

const Subheader = () => {
  return (
    <div className="subheader-container">
      <ul>
        <li>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/items-mobile">
            Mobile and Accessories
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/items-furniture">
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/items-books">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/items-fashion">
            Fashion
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Subheader;
