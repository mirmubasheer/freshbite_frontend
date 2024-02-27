import React, { Fragment } from "react";
import { Row, Col, Media } from "reactstrap";
// import fashion from "../../../public/assets/images/mega-menu/fashion.jpg";
import Vegetables from "../../../public/assets/images/vegetables/blog/6.jpg";

// import Vegetables from "../../../pages";

const SideBar = () => {
  const closeNav = () => {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  };

  const handleSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) {
      return;
    }

    if (event.target.nextElementSibling.classList.contains("opensub1"))
      event.target.nextElementSibling.classList.remove("opensub1");
    else {
      document.querySelectorAll(".opensub1").forEach(function (value) {
        value.classList.remove("opensub1");
      });
      event.target.nextElementSibling.classList.add("opensub1");
    }
  };

  const handleSubTwoMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub2"))
      event.target.nextElementSibling.classList.remove("opensub2");
    else {
      document.querySelectorAll(".opensub2").forEach(function (value) {
        value.classList.remove("opensub2");
      });
      event.target.nextElementSibling.classList.add("opensub2");
    }
  };
  const handleSubThreeMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub3"))
      event.target.nextElementSibling.classList.remove("opensub3");
    else {
      document.querySelectorAll(".opensub3").forEach(function (value) {
        value.classList.remove("opensub3");
      });
      event.target.nextElementSibling.classList.add("opensub3");
    }
  };

  const handleSubFourMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub4"))
      event.target.nextElementSibling.classList.remove("opensub4");
    else {
      document.querySelectorAll(".opensub4").forEach(function (value) {
        value.classList.remove("opensub4");
      });
      event.target.nextElementSibling.classList.add("opensub4");
    }
  };

  const handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensidesubmenu"))
      event.target.nextElementSibling.classList.remove("opensidesubmenu");
    else {
      event.target.nextElementSibling.classList.add("opensidesubmenu");
    }
  };

  return (
    <Fragment>
      <div id="mySidenav" className="sidenav">
        <a href={null} className="sidebar-overlay" onClick={closeNav}></a>
        <nav>
          <a href={null} onClick={closeNav}>
            <div className="sidebar-back text-start">
              <i className="fa fa-angle-left pe-2" aria-hidden="true"></i> Back
            </div>
          </a>
          <ul id="sub-menu" className="sidebar-menu">
            <li>
              <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
                All Categories
                <span className="sub-arrow"></span>
              </a>
              <ul className="mega-menu clothing-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <h5>Fruits</h5>
                        <ul>
                          <li>
                            <a href="#">Fresh fruits</a>
                          </li>
                          <li>
                            <a href="#">frozen fruits</a>
                          </li>
                          <li>
                            <a href="#">indian mangoes</a>
                          </li>
                          <li>
                            <a href="#">organic fruits</a>
                          </li>
                        </ul>
                        <h5>Vegetables</h5>
                        <ul>
                          <li>
                            <a href="#">frozen veggies</a>
                          </li>
                          <li>
                            <a href="#">leafy vegetables</a>
                          </li>
                          <li>
                            <a href="#">organic veggies</a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>beverages</h5>
                        <ul>
                          <li>
                            <a href="#">coffee</a>
                          </li>
                          <li>
                            <a href="#">tea</a>
                          </li>
                          <li>
                            <a href="#">tea bags</a>
                          </li>
                          <li>
                            <a href="#">organic beverages</a>
                          </li>
                          <li>
                            <a href="#">fruit juice and drinks</a>
                          </li>
                          <li>
                            <a href="#">soft drinks and soda</a>
                          </li>
                          <li>
                            <a href="#">powder drinks</a>
                          </li>
                          <li>
                            <a href="#">pulp</a>
                          </li>
                          {/* <li>
                            <a href="#">pockets squares</a>
                          </li> */}
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <a href="#" className="mega-menu-banner">
                        <Media
                          src={Vegetables.src}
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Food Grains, Oils & Masala's
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">basmati rice</a>
                </li>
                <li>
                  <a href="#">brown rice</a>
                </li>
                <li>
                  <a href="#">idli rice</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                    dal & pulses
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">chana dal</a>
                    </li>
                    <li>
                      <a href="#">masoor dal</a>
                    </li>
                    <li>
                      <a href="#">moong dal</a>
                    </li>
                    <li>
                      <a href="#">organic dal</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Batters,Dairy & Poultry
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">idli & dosa batters</a>
                </li>
                <li>
                  <a href="#">organic idli & dosa</a>
                </li>
                <li>
                  <a href="#">batters</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">eggs</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Sweet & Dry Fruits
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">branded sweets</a>
                </li>
                <li>
                  <a href="#">dry fruit sweets</a>
                </li>
                <li>
                  <a href="#">food colour</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                    more..
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">powders</a>
                    </li>
                    <li>
                      <a href="#">frozen</a>
                    </li>
                    <li>
                      <a href="#">home made</a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => handleSubThreeMenu(e)}>
                        dry fruits & nuts
                        <span className="sub-arrow"></span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">dry fruits & nuts</a>
                        </li>
                        <li>
                          <a href="#">dry fruits sweets</a>
                        </li>
                        <li>
                          <a href="#">gift boxes</a>
                        </li>
                        {/* <li>
                          <a href="#">helmets</a>
                        </li>
                        <li>
                          <a href="#">scarves</a>
                        </li> */}
                        <li>
                          {/* <a href="#" onClick={(e) => handleSubFourMenu(e)}>
                            more...
                            <span className="sub-arrow"></span>
                          </a> */}
                          {/* <ul>
                            <li>
                              <a href="#">accessory gift sets</a>
                            </li>
                            <li>
                              <a href="#">travel accessories</a>
                            </li>
                            <li>
                              <a href="#">phone cases</a>
                            </li>
                          </ul> */}
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">belts & more</a>
                    </li>
                    <li>
                      <a href="#">wearable</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Snacks</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                biscuits, cakes, chocolates & More
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">cakes</a>
                </li>
                <li>
                  <a href="#">cashew,choco</a>
                </li>
                <li>
                  <a href="#">biscuuits & more</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                    more
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">chocolates</a>
                    </li>
                    <li>
                      <a href="#">rusk</a>
                    </li>
                    <li>
                      <a href="#">waffers</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">pooja & festival items</a>
            </li>
            <li>
              <a href="#">personal & home care</a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideBar;
