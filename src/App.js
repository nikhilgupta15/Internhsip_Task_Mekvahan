import React from "react";
import { Router } from "@reach/router";
import HomePage from "./components/homepage";
import AddressPage from "./components/addresspage";
function App() {
  return (
    <div>
      <Router>
        <HomePage path="/"></HomePage>
        <AddressPage path="address"></AddressPage>
      </Router>
    </div>
  );
}

export default App;
