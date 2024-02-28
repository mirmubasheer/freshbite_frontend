import React, { Fragment } from "react";
import Link from "next/link";

const LogoImage = ({ logo, logoMobile }) => {
  return (
    <Fragment>
      <Link href={"/"}>
        {/* <a> */}
        <img
          src={`/assets/images/icon/${logo ? logo : "logo.png"}`}
          alt=""
          className="img-fluid blur-up lazyload d-none d-sm-block"
        />
        <img
          src={`/assets/images/icon/${
            logoMobile ? logoMobile : "logo-Mobile.png"
          }`}
          alt=""
          className="img-fluid blur-up lazyload d-sm-none"
          style={{ height: "100px", width: "180px" }} // Example height and width values
        />

        {/* </a> */}
      </Link>
    </Fragment>
  );
};

export default LogoImage;
