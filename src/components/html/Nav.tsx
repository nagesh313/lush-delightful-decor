import React from "react";
import "materialize-css";
import { SideNavComponent } from "./SideNav";
interface IState {
  imageName: any;
}
export class NavComponent extends React.Component<{}, IState> {
  state = { imageName: "logo-text.png" };
  render() {
    return (
      <React.Fragment>
        <SideNavComponent></SideNavComponent>
        <div className="navbar-fixed">
          <nav className="teal">
            <div className="nav-wrapper">
              <a href="/#" className="brand-logo center">
                <img
                  alt=""
                  className="responsive-img"
                  style={{ verticalAlign: "middle", width: "280px" }}
                  src={this.state.imageName}
                />
              </a>
              <ul id="nav-mobile" className="left">
                <li>
                  <a
                    href="/#"
                    data-activates="slide-out"
                    className="sidenav-trigger"
                  >
                    <i className="material-icons">menu</i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
