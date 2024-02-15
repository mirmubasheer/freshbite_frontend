// import React from "react";
import React, { useEffect } from "react";

// import Banner from "./layouts/Fashion/Components/Banner";
import Banner from "./layouts/Vegetables/components/Banner";
// import CollectionBanner from "./layouts/Fashion/Components/Collection-Banner";
import Collections from "./layouts/Vegetables/components/Collections";
// import TopCollection from "../components/common/Collections/Collection3";
import TopCollection from "../components/common/Collections/Collection4";

// import Parallax from "./layouts/Fashion/Components/Parallax";
// import SpecialProducts from "../components/common/Collections/TabCollection1";
import SpecialProducts from "../components/common/Collections/Collection5";

// import ServiceLayout from "../components/common/Service/service1";
// import Blog from "../components/common/Blog/blog1";
import Blog from "../components/common/Blog/blog1";

// import Instagram from "../components/common/instagram/instagram1";
// import LogoBlock from "../components/common/logo-block";
// import HeaderOne from "../components/headers/header-one";
import HeaderTwo from "../components/headers/header-two";

// import { Product4 } from "../services/script";
import { Product5 } from "../services/script";
import { Productfive } from "../services/script";

// import Paragraph from "../components/common/Paragraph";
// import ModalComponent from "../components/common/Modal";
import ModalComponent from "../components/common/Modal";

// import Helmet from "react-helmet";
import MasterParallaxBanner from "./layouts/Vegetables/components/MasterParallaxBanner";

// import MasterFooter from "../components/footers/common/MasterFooter";
import MasterFooter from "../components/footers/common/MasterFooter";

const Vegetables = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#81ba00");
  });
  return (
    <>
      {/* <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href={"/assets/images/favicon/1.png"}
        />
      </Helmet> */}
      <ModalComponent />
      {/* <HeaderOne logoName={"logo.png"} topClass="top-header" /> */}
      <HeaderTwo logoName={"logo.png"} topClass="top-header" />
      <Banner />
      <Collections />

      {/* <Paragraph
        title="title1 section-t-space"
        inner="title-inner1"
        hrClass={false}
      /> */}
      <TopCollection
        titleClass="title4"
        inner="title-inner4"
        line={true}
        type="vegetables"
        productSlider={Product5}
        title="trending products"
        designClass="section-b-space addtocart_count ratio_square"
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />

      <MasterParallaxBanner
        bg="parallax-banner15"
        parallaxClass="text-start p-left"
        title="2023"
        subTitle1="food market"
        subTitle2="special offer"
      />
      <TopCollection
        titleClass="title4"
        inner="title-inner4"
        line={true}
        type="vegetables"
        productSlider={Productfive}
        title="Deals Of The Day"
        designClass="section-b-space addtocart_count ratio_square"
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />

      <div className="section-b-space">
        <SpecialProducts
          type="vegetables"
          cartClass="cart-info cart-wrap"
          designClass="addtocart_count ratio_square"
        />
      </div>
      {/* <ServiceLayout sectionClass="border-section small-section" /> */}
      <Blog
        type="vegetables"
        sectionClass="blog blog-bg section-b-space ratio2_3"
        inner="title-inner4"
        title="title4"
      />
      {/* <Instagram type="fashion" /> */}
      {/* <div className="section-b-space"><LogoBlock /></div> */}
      {/* <MasterParallaxBanner
        bg="parallax-banner15"
        parallaxClass="text-start p-left"
        title="2023"
        subTitle1="food market"
        subTitle2="special offer"
      /> */}

      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo.png"}
      />
    </>
  );
};

export default Vegetables;
