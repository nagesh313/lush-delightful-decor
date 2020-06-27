import React from "react";
declare const $: any;
export class SideNavComponent extends React.Component {
  componentDidMount() {
    $(".sidenav-trigger").sideNav();
  }
  render() {
    return (
      <React.Fragment>
        <ul id="slide-out" className="side-nav">
          <li>
            <img alt="" className="circle responsive-img" src="logo.png" />
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a href="#!" className="waves-effect">
              <i className="material-icons">cloud</i>Home
            </a>
          </li>

          <li>
            <a href="#!" className="waves-effect">
              <i className="material-icons">cloud</i>About us
            </a>
          </li>

          <li>
            <a href="/#" className="waves-effect">
              <i className="material-icons">cloud</i> Testimonials
            </a>
          </li>
          <li className="no-padding">
            <ul className="collapsible collapsible-accordion">
              <li>
                <a href="/#" className="collapsible-header">
                  Our Offerings<i className="material-icons">arrow_drop_down</i>
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <a href="#!">Kitchen</a>
                    </li>
                    <li>
                      <a href="#!">TV Unit</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
