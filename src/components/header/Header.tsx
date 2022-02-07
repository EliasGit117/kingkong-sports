import React, {FC} from "react";
import "./Header.css";

interface IProps {}

const Header: FC<IProps> = () => {

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container pb-2 pt-2">
          <a className="navbar-brand" href="#">KINK KONG</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02" aria-expanded="false"
                  aria-label="Toggle navigation" style={{border: "none"}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item big-link">
                <a className="nav-link" href="#">
                  CONTACTS
                </a>
              </li>
              <li className="nav-item big-link">
                <a className="nav-link" href="#">
                  GALLERY
                </a>
              </li>
              <li className="nav-item big-link">
                <a className="nav-link" href="#">
                  FOOD
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;