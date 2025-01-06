import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mt-5 pt-5">
      <hr />
      <footer className="pt-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Category</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  About Us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Store Locator
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Kids Club
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Get in Touch</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Careers
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Become a Franchisee
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>
                Stay updated on latest offers, discounts and events near you.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-warning" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 my-4 border-top">
          <p>© 2024 Quill & Tales, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-2">
              <Link to="/">
                <div className="bg-warning bg-opacity-75 p-1 rounded-circle">
                  <img
                    src="/icon3.svg"
                    alt="me"
                    style={{ maxHeight: "25px" }}
                  />
                </div>
              </Link>
            </li>
            <li className="ms-3">
              <div className="bg-dark bg-opacity-75 p-1 px-2 rounded-circle">
                <a className="link-body-emphasis" href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </div>
            </li>
            <li className="ms-3">
              <div className="bg-primary bg-opacity-75 p-1 px-2 rounded-circle">
                <a className="link-body-emphasis" href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </li>
            <li className="ms-3">
              <div className="bg-danger bg-opacity-75 p-1 px-2 rounded-circle">
                <a className="link-body-emphasis" href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
