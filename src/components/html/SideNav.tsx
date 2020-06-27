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
            <div className="user-view">
              <div className="background">
                <img alt="" src="logo.png" />
              </div>
              <a href="#!user">
                <img alt="" className="circle" src="logo.png" />
              </a>
              <a href="#!name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#!email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>First Link With Icon
            </a>
          </li>
          <li>
            <a href="#!">Second Link</a>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a href="/#" className="subheader">
              Subheader
            </a>
          </li>
          <li>
            <a className="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
          <li>
            <a href="#!">First Sidebar Link</a>
          </li>
          <li>
            <a href="#!">Second Sidebar Link</a>
          </li>
          <li className="no-padding">
            <ul className="collapsible collapsible-accordion">
              <li>
                <a href="/#" className="collapsible-header">
                  Dropdown<i className="material-icons">arrow_drop_down</i>
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <a href="#!">First</a>
                    </li>
                    <li>
                      <a href="#!">Second</a>
                    </li>
                    <li>
                      <a href="#!">Third</a>
                    </li>
                    <li>
                      <a href="#!">Fourth</a>
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
