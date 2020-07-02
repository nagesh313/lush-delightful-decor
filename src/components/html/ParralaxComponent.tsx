import "materialize-css";
import React from "react";
import { CardsComponent } from "./CardsComponent";
import ScrollableTabsButtonForce from "./ForcedTabsComponent";
import { SliderComponent } from "./Slider";
import { TestimonialsCardComponent } from "./TestimonialsCardComponent";
declare const $: any;
export class ParralaxComponent extends React.Component {
  componentDidMount() {
    $(".parallax").parallax();
  }
  render() {
    return (
      <React.Fragment>
        <SliderComponent></SliderComponent>
        <br></br>
        <ScrollableTabsButtonForce></ScrollableTabsButtonForce>

        <div className="parallax-container">
          <div className="parallax">
            <img alt="" src="actual/7.jpeg" />
          </div>
        </div>
        <div className="section white">
          <CardsComponent></CardsComponent>
        </div>
        {/* <div className="parallax-container">
          <div className="parallax">
            <img alt="" src="actual/8.jpeg" />
          </div>
        </div> */}
        {/* <CarouselComponent></CarouselComponent> */}
        <div className="parallax-container">
          <div className="parallax">
            <img alt="" src="actual/9.jpeg" />
          </div>
        </div>
        <div className="section white">
          <TestimonialsCardComponent></TestimonialsCardComponent>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img alt="" src="actual/10.jpeg" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
