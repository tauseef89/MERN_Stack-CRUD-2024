import { NavLink } from "react-router-dom";
import Logo from "../assets/react.svg";
function Sidebar() {
  return (
    <aside>
      <h1 className="logo">
        <img src={Logo} alt="Demo Shop" />
        Demo Shop
      </h1>
      <ul className="side-nav">
        <li>
          <NavLink to="/">Dasboard</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/add-product">Add New Product</NavLink>
        </li>
      </ul>
    </aside>
  );
}
export default Sidebar;
