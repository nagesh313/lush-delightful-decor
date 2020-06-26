import React from "react";
import "materialize-css";
import { CardsComponent } from "./CardsComponent";
import { TestimonialsCardComponent } from "./TestimonialsCardComponent";
import { CollapsibleComponent } from "./Collapsible";
import { SliderComponent } from "./Slider";
import { CarouselComponent } from "./CarouselComponent";
declare const $: any;
export class ParralaxComponent extends React.Component {
  componentDidMount() {
    $(".parallax").parallax();
  }
  render() {
    return (
      <React.Fragment>
        <SliderComponent></SliderComponent>
        <CardsComponent></CardsComponent>
        <div className="parallax-container">
          <div className="parallax">
            <img alt="" src="images/parallax1.jpg" />
          </div>
        </div>
        <div className="section white">
          <CollapsibleComponent></CollapsibleComponent>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img alt="" src="images/parallax1.jpg" />
          </div>
        </div>

        <CarouselComponent></CarouselComponent>
        <div className="parallax-container">
          <div className="parallax">
            <img alt="" src="images/parallax2.jpg" />
          </div>
        </div>
        <div className="section white">
          <TestimonialsCardComponent></TestimonialsCardComponent>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img alt="" src="images/parallax2.jpg" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
