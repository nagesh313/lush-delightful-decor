import React from "react";
import "materialize-css";
import { SideNavComponent } from "./SideNav";
interface IState {
  imageName: any;
}
export class NavComponent extends React.Component<{}, IState> {
  state = { imageName: "logo text/Final logo.png" };
  count = 0;
  componentDidMount() {
    // this.getImage();
  }
  getImage() {
    // setInterval(() => {
    //   let imageName = (this.count++ % 8) + ".png";
    //   console.log(imageName);
    //   this.setState({ imageName: "logo text/" + imageName });
    // }, 2000);
  }
  render() {
    return (
      <React.Fragment>
        <SideNavComponent></SideNavComponent>
        <div className="navbar-fixed">
          <nav style={{ backgroundColor: "#c6ff00" }}>
            <div className="nav-wrapper">
              <a href="/#" className="brand-logo center">
                <img
                  alt=""
                  className="responsive-img"
                  style={{ verticalAlign: "middle" }}
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
