import React from "react";
import "materialize-css";
import { SideNavComponent } from "./SideNav";
export class NavComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideNavComponent></SideNavComponent>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">
              Logo
            </a>
            <ul id="nav-mobile" className="left">
              <li>
                <a
                  href="#"
                  data-activates="slide-out"
                  className="sidenav-trigger"
                >
                  <i className="material-icons">menu</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
