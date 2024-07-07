import React from "react";
import Header from "../../Components/Header";
import SubMenu from "./SubMenu";
import Essentials from "./Essentials";
import Arrivals from "./Arrivals";
import Sellers from "./Sellers";
import Trial from "./Trial";
import OrderCount from "./OrderCount";
import Offers from "./Offers";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <SubMenu />
      <Essentials />
      <Arrivals />
      <Sellers />
      <Trial />
      <OrderCount />
      <Offers />
      <Footer />
    </>
  );
};

export default Home;
