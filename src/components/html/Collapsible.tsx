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
        <div className="container" style={{ width: "80%" }}>
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
      </React.Fragment>
    );
  }
}
