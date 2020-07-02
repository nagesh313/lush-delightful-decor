import React from "react";
declare const $: any;
export class SliderComponent extends React.Component {
  componentDidMount() {
    $(".slider").slider();
  }
  render() {
    return (
      <React.Fragment>
        <div className="slider">
          <ul className="slides">
            <li>
              <img className="responsive-img" alt="" src="preeti/4.jpeg" />
              <div className="caption center-align">
                <h3>Why Choose us?</h3>
                <h5 className="light grey-text text-lighten-3">
                  Our brand's main motto is our client’s full satisfaction.
                </h5>
              </div>
            </li>
            <li>
              <img alt="" className="responsive-img" src="preeti/1.jpeg" />
              <div className="caption left-align">
                <h3>Guaranteed Client’s Satisfaction!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Not only will your materials look great – they will get
                  results
                </h5>
              </div>
            </li>
            <li>
              <img alt="" className="responsive-img" src="preeti/kitchen.jpg" />
              <div className="caption right-align">
                <h3>We are Creative!</h3>
                <h5 className="light grey-text text-lighten-3">
                  While keeping a close eye on the calendar and your budget.
                </h5>
              </div>
            </li>
            <li>
              <img alt="" className="" src="preeti/11.jpeg" />
              <div className="caption center-align">
                <h3>We bring our diverse background to the table!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Advertising, design, branding, public relations, research and
                  strategic planning to work for your company.
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
