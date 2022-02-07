import React, {FC} from "react";
import "./Footer.css";
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';

const Footer: FC = () => {
  return(
    <>
      <nav className="navbar navbar-dark bg-dark ftr text-white">
        <div className="container">
          <div className="row w-100">
            <div className="col text-center mt-2 mb-2">
              <h3>KING KONG</h3>
            </div>
          </div>
          <div className="row w-100 mb-2">
            <div className="col text-center">
              <a className="red-hover text-white m-3">
                <BsInstagram size={30}/>
              </a>
              <a className="red-hover text-white m-3">
                <BsFacebook size={30}/>
              </a>
              <a className="red-hover text-white m-3">
                <BsWhatsapp size={30}/>
              </a>
            </div>
          </div>
          <div className="row w-100 mt-2">
            <div className="col">
              Created by ES
            </div>
            <div className="col text-end">
              2022
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Footer;