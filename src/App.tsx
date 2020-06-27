import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import "./App.css";
import { Fabcomponent } from "./components/html/FabComponent";
import { FooterComponent } from "./components/html/Footer";
import { NavComponent } from "./components/html/Nav";
import { ParralaxComponent } from "./components/html/ParralaxComponent";

declare const Materialize: any;
class App extends React.Component {
  componentDidMount() {
    var options = [
      {
        selector: ".card-list",
        offset: 250,
        callback: 'Materialize.showStaggeredList(".card-list")',
      },
      {
        selector: ".testimonial-card-list",
        offset: 250,
        callback: 'Materialize.showStaggeredList(".testimonial-card-list")',
      },
    ];
    Materialize.scrollFire(options);
  }

  render() {
    return (
      <div className="App">
        <NavComponent></NavComponent>
        <ParralaxComponent></ParralaxComponent>
        <FooterComponent></FooterComponent>
        <Fabcomponent></Fabcomponent>
        {/* <ToastComponent></ToastComponent> */}
      </div>
    );
  }
}

export default App;
