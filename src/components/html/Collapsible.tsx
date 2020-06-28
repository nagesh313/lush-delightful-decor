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
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3">
                <a href="#test1">Living Room Designs</a>
              </li>
              <li className="tab col s3">
                <a className="active" href="#test2">
                  Bedroom Designs
                </a>
              </li>
              <li className="tab col s3">
                <a href="#test3">Bathroom Designs</a>
              </li>
              <li className="tab col s3">
                <a href="#test4">Kitchen Designs</a>
              </li>
            </ul>
          </div>
          All
          <div id="test1" style={{ height: "500px" }} className="col s12">
            Test 1
          </div>
          <div id="test2" style={{ height: "500px" }} className="col s12">
            Test 2
          </div>
          <div id="test3" style={{ height: "500px" }} className="col s12">
            Test 3
          </div>
          <div id="test4" style={{ height: "500px" }} className="col s12">
            Test 4
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
