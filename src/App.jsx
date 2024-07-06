import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Essentials from "./Pages/Essentials";
import Arrivals from "./Pages/Arrivals";
import Sellers from "./Pages/Sellers";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Essentials />
      <Arrivals />
      <Sellers />
    </>
  );
};

export default App;
