import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Row from "./Components/Row";
import { originals, topRated } from "./Components/urls";
export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      <Row title={"Netflix Originals"} genre={originals} />
      <Row title={"Top Rated"} isSmall genre={topRated} />
    </div>
  );
}
