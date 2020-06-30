import React from "react";
import "materialize-css";
import { CardsComponent } from "./CardsComponent";
import { TestimonialsCardComponent } from "./TestimonialsCardComponent";
import { CollapsibleComponent } from "./Collapsible";
import { SliderComponent } from "./Slider";
import { CarouselComponent } from "./CarouselComponent";
import { TabsComponent } from "./Tabs";
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
            <img alt="" src="actual/7.jpeg" />
          </div>
        </div>
        <div className="section white">
          <CollapsibleComponent></CollapsibleComponent>
          <TabsComponent></TabsComponent>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img alt="" src="actual/8.jpeg" />
          </div>
        </div>
        <CarouselComponent></CarouselComponent>
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
