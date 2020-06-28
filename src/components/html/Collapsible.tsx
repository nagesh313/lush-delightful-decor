import React from "react";
declare const $: any;

export class CollapsibleComponent extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $(".collapsible").collapsible();
    });
  }
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="row">
          <div className="col s12" style={{ paddingBottom: "5px" }}>
            <ul className="tabs">
              <li className="tab col s2">
                <a href="#test1">Living Room Designs</a>
              </li>
              <li className="tab col s2">
                <a className="active" href="#test2">
                  Bedroom Designs
                </a>
              </li>
              <li className="tab col s2">
                <a href="#test3">Bathroom Designs</a>
              </li>
              <li className="tab col s2">
                <a href="#test4">Kitchen Designs</a>
              </li>
              <li className="tab col s2">
                <a href="#test5">Modern House Plans</a>
              </li>
              <li className="tab col s2">
                <a href="#test6">Teen Room Designs</a>
              </li>
              <li className="tab col s2">
                <a href="#test7">Furniture + Accessories</a>
              </li>
              <li className="tab col s1">
                <a href="#test8">More</a>
              </li>
            </ul>
          </div>
          <div
            id="test1"
            style={{ height: "500px", paddingTop: "5px" }}
            className="row"
          >
            <div className=" col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/1"
              />
            </div>
            <div className="col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/2"
              />
            </div>
          </div>
          <div id="test2" style={{ height: "500px" }} className="col s12">
            <div className=" col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/3"
              />
            </div>
            <div className="col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/4"
              />
            </div>
            <div className=" col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/5"
              />
            </div>
            <div className="col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/6"
              />
            </div>
          </div>
          <div id="test3" style={{ height: "500px" }} className="col s12">
            <div className=" col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/7"
              />
            </div>
            <div className="col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/8"
              />
            </div>
          </div>
          <div id="test4" style={{ height: "500px" }} className="col s12">
            <div className=" col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/9"
              />
            </div>
            <div className="col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/10"
              />
            </div>
          </div>
          <div id="test5" style={{ height: "500px" }} className="col s12">
            <div className=" col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/11"
              />
            </div>
            <div className="col m3 s2">
              <img
                alt=""
                className="materialboxed"
                data-caption="A picture of a way with a group of trees in a park"
                width="250"
                src="https://lorempixel.com/800/400/nature/12"
              />
            </div>
          </div>
          <div id="test6" style={{ height: "500px" }} className="col s12">
            Test 6
          </div>
          <div id="test7" style={{ height: "500px" }} className="col s12">
            Test 7
          </div>
          <div id="test8" style={{ height: "500px" }} className="col s12">
            Test
          </div>
        </div>
        {/* <div className="container" style={{ width: "80%" }}>
          <div className="row">
            <ul className="collapsible popout" data-collapsible="accordion">
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">filter_drama</i>First
                </div>
                <div className="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">place</i>Second
                </div>
                <div className="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">whatshot</i>Third
                </div>
                <div className="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
       */}
      </React.Fragment>
    );
  }
}
