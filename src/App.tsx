import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import "./App.css";
import { FooterComponent } from "./components/html/Footer";
import { NavComponent } from "./components/html/Nav";
import { ParralaxComponent } from "./components/html/ParralaxComponent";

declare const Materialize: any;
declare const $: any;
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
    $(".scrollspy").scrollSpy();
  }

  render() {
    return (
      <div className="App">
        {/* <HorizontalLinearStepper></HorizontalLinearStepper> */}
        <NavComponent></NavComponent>
        <ParralaxComponent></ParralaxComponent>
        <FooterComponent></FooterComponent>
        {/* <Fabcomponent></Fabcomponent> */}
      </div>
    );
  }
}

export default App;
