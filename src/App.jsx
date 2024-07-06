import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Essentials from "./Pages/Essentials";
import Arrivals from "./Pages/Arrivals";
import Sellers from "./Pages/Sellers";
import Trial from "./Pages/Trial";
import OrderCount from "./Pages/OrderCount";
import Offers from "./Pages/Offers";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
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

export default App;
