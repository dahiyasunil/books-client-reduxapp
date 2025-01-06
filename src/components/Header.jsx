import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-warning shadow">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div>
            <Link to="/" className="btn border-0">
              <i
                className="bi bi-journals navbar-brand text-decoration-none"
                style={{ fontSize: "3rem", color: "black" }}
              ></i>
              <span>Quill & Tales</span>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collpase navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/manage/add">
                  Add
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
