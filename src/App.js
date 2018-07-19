import React from "react";
import "core-js/es6/map";
 import "core-js/es6/set"; import 'raf/polyfill';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = props => {
  return (
    <div id="App" className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
