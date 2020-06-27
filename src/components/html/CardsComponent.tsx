import React from "react";
export class CardsComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="cards-row">
            <ul className="card-list">
              <li style={{ opacity: 0 }}>
                <div className="col m4 s12">
                  <div className="card hoverable" id="card1">
                    <div className="card-image">
                      <img alt="" src="images/13.jpg" />
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information. I am convenient because I require
                        little markup to use effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ opacity: 0 }}>
                <div className="col m4 s12">
                  <div className="card hoverable">
                    <div className="card-image">
                      <img alt="" src="images/14.jpeg" />
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information. I am convenient because I require
                        little markup to use effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ opacity: 0 }}>
                <div className="col m4 s12">
                  <div className="card hoverable">
                    <div className="card-image">
                      <img alt="" src="images/15.jpg" />
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information. I am convenient because I require
                        little markup to use effectively.
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
