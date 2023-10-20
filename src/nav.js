import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav nav-tabs  wd-navigation ">
      <Link className="nav-link" to="/Labs/a3">
        A3
      </Link>
      <Link className="nav-link" to="/Labs/a4">
        A4
      </Link>
      <Link className="nav-link" to="/hello">
        Hello
      </Link>
      <Link className="nav-link" to="/Kanbas">
        Kanbas
      </Link>
    </nav>
  );
}
export default Nav;
