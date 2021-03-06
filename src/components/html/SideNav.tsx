import React from "react";
declare const $: any;
export class SideNavComponent extends React.Component {
  componentDidMount() {
    $(".sidenav-trigger").sideNav();
  }
  render() {
    return (
      <React.Fragment>
        <ul id="slide-out" className="side-nav teal sidenav-close">
          <li>
            <img alt="" className="circle responsive-img" src="logo.png" />
          </li>
          {/* <li>
            <div className="divider"></div>
          </li> */}
          <li className="sidenav-close">
            <a
              href="#home-slider"
              className="waves-effect sidenav-close"
              data-target="slide-out"
            >
              <i className="material-icons">home</i>Home
            </a>
          </li>
          <li>
            <a href="#our-offerrings" className="waves-effect">
              <i className="material-icons">local_offer</i>Our Offerings
            </a>
          </li>
          <li>
            <a href="#about-us" className="waves-effect">
              <i className="material-icons">loyalty</i>About us
            </a>
          </li>

          <li>
            <a href="#testimonials-component" className="waves-effect">
              <i className="material-icons">insert_comment</i> Testimonials
            </a>
          </li>
          <li>
            <a href="#reach-us-out" className="waves-effect">
              <i className="material-icons">phone</i> Reach Us Out
            </a>
          </li>
          {/* <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
      <ul id='dropdown1' class='dropdown-content'>
        <li><a href="#!">First</a></li>
        <li><a href="#!">Second</a></li>
        <li><a href="#!">Third</a></li>
        <li><a href="#!">Fourth</a></li>
      </ul> */}
          {/* <li className="no-padding">
            <ul className="collapsible collapsible-accordion">
              <li className="no-padding">
                <a href="/#" className="collapsible-header">
                  Our Offerings<i className="material-icons">arrow_drop_down</i>
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <a href="#!">
                        <i className="material-icons">kitchen</i>Kitchen
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="material-icons">tv</i>TV Unit
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
         */}
        </ul>
      </React.Fragment>
    );
  }
}
