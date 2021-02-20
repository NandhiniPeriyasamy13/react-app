import React from 'react';
import {Navbar} from 'reactstrap';
import './App.css';
import {NavbarBrand} from "reactstrap";
import Menu from "./components/MenuComponent";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="#">My react App</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
