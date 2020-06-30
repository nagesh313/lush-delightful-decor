import React from "react";
export class CardsComponent extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <h3 className="center" style={{ fontFamily: "cursive" }}>
          Celebrate the love of decor and design with our offereings
        </h3>
        <div className="container">
          <div className="row" id="cards-row">
            <ul className="card-list">
              <li style={{ opacity: 0 }}>
                <div className="col m4 s12">
                  <div className="card hoverable" id="card1">
                    <div className="card-image">
                      <img alt="" src="card/tele.jpg" />
                      {/* <span className="yellow-text card-title">TV Units</span> */}
                    </div>
                    <div className="card-content">
                      <p style={{ textAlign: "center" }}>
                        Dazzling TV units for a vibrant looking living room
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ opacity: 0 }}>
                <div className="col m4 s12">
                  <div className="card hoverable">
                    <div className="card-image">
                      <img alt="" src="card/14.jpeg" />
                      {/* <span className="yellow-text card-title">Hall Decor</span> */}
                    </div>
                    <div className="card-content">
                      <p style={{ textAlign: "center" }}>
                        Explore our different designs for Gorgeous Ways to Dress
                        Up Your Hall
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ opacity: 0 }}>
                <div className="col m4 s12">
                  <div className="card hoverable">
                    <div className="card-image">
                      <img alt="" src="card/15.jpg" />
                      {/* <span className="yellow-text card-title">
                        Kitchen Interiors
                      </span> */}
                    </div>
                    <div className="card-content">
                      <p style={{ textAlign: "center" }}>
                        One stop solution for all your Kitchen needs
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
