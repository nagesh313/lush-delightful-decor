import { createBrowserHistory } from "history";
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactGA from "react-ga";
import "./App.css";
import { FooterComponent } from "./components/html/Footer";
import { NavComponent } from "./components/html/Nav";
import { ParralaxComponent } from "./components/html/ParralaxComponent";
const trackingId = "UA-171596388-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId, { gaOptions: { siteSpeedSampleRate: 100 } });
ReactGA.pageview(window.location.pathname + window.location.search);
declare const Materialize: any;
declare const $: any;
const history = createBrowserHistory();
history.listen((location: any) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
class App extends React.Component {
  componentDidMount() {
    document.title = "Lush Interior Decor";
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
