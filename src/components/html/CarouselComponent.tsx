import React from "react";
declare const $: any;
export class CarouselComponent extends React.Component {
  componentDidMount() {
    $(".carousel").carousel();
  }
  render() {
    return (
      <React.Fragment>
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img alt="" src="images/5.jpeg" />
          </a>
          <a className="carousel-item" href="#two!">
            <img alt="" src="images/6.jpg" />
          </a>
          <a className="carousel-item" href="#three!">
            <img alt="" src="images/7.jpg" />
          </a>
          <a className="carousel-item" href="#four!">
            <img alt="" src="images/8.jpg" />
          </a>
          <a className="carousel-item" href="#five!">
            <img alt="" src="images/9.jpg" />
          </a>
        </div>
      </React.Fragment>
    );
  }
}
