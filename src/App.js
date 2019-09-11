import React from "react";
import "./App.css";
import NavMenu from "./Components/NavMenuCom/NavMenu";
import TopDescription from "./Components/TopDescription/TopDescription";
import Service from "./Components/Service/service";
import City from "./Components/City/City";
import FooterComp from "./Components/FooterComp/FooterComp";
import StatsComp from "./Components/StatsComp/StatsComp";
import CityHeader from "./Components/CityHeader/CityHeader";

const ourServices = [
  {
    target: "For patients",
    serviceDesc:
      "Find a doctor, book a visit and solve any health-related doubt",
    image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    type: "patient-box"
  },
  {
    target: "For doctors",
    serviceDesc: "Save time managing visits and cut no-shows by half",
    image: "https://www.docplanner.com/img/screen-saas@2x.png",
    type: "doctor-box"
  }
];
function App() {
  return (
    <div className="App">
      <NavMenu />
      <TopDescription />
      <div className="boxes">
        <Service services={ourServices} />
      </div>
      <StatsComp />

      <CityHeader />

      <div className="cardBoxes">
        <City />
      </div>
      <FooterComp />
    </div>
  );
}

export default App;
