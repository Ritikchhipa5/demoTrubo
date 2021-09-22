import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TawakAPI } from "./util";
import "./App.css";
import Routes from "./Router/Routes";

AOS.init();
function App() {
  useEffect(() => {
    TawakAPI();
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
