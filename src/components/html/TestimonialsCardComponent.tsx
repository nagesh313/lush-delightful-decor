import React from "react";
export class TestimonialsCardComponent extends React.Component {
  removePulse(ele: any) {
    ele.currentTarget.classList.remove("pulse");
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="cards-row">
            <ul className="testimonial-card-list">
              <li style={{ opacity: 0 }}>
                <div className="col m3 s12">
                  <div className="card hoverable">
                    <div className="card-content center">
                      <button
                        className="btn-floating btn-large waves-effect waves-light pulse activator"
                        onClick={(el) => {
                          this.removePulse(el);
                        }}
                      >
                        <i className="material-icons">format_quote</i>
                      </button>
                    </div>
                    <div className="card-content">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information. I am convenient because I require
                        little markup to use effectively.
                      </p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">
                        <i className="material-icons right">close</i>Card Title
                      </span>
                      <p>
                        Here is some more information about this product that is
                        only revealed once clicked on.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ opacity: 0 }}>
                <div className="col m3 s12">
                  <div className="card hoverable">
                    <div className="card-content center">
                      <button
                        className="btn-floating btn-large waves-effect waves-light pulse activator"
                        onClick={(el) => {
                          this.removePulse(el);
                        }}
                      >
                        <i className="material-icons">thumb_up</i>
                      </button>
                    </div>
                    <div className="card-content">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information. I am convenient because I require
                        little markup to use effectively.
                      </p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">
                        <i className="material-icons right">close</i>Card Title
                      </span>
                      <p>
                        Here is some more information about this product that is
                        only revealed once clicked on.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ opacity: 0 }}>
                <div className="col m3 s12">
                  <div className="card hoverable">
                    <div className="card-content center">
                      <button
                        className="btn-floating btn-large waves-effect waves-light pulse activator"
                        onClick={(el) => {
                          this.removePulse(el);
                        }}
                      >
                        <i className="material-icons">rate_review</i>
                      </button>
                    </div>
                    <div className="card-content">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information. I am convenient because I require
                        little markup to use effectively.
                      </p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">
                        <i className="material-icons right">close</i>Card Title
                      </span>
                      <p>
                        Here is some more information about this product that is
                        only revealed once clicked on.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ opacity: 0 }}>
                <div className="col m3 s12">
                  <div className="card hoverable">
                    <div className="card-content center">
                      <button
                        className="btn-floating btn-large waves-effect waves-light pulse activator"
                        onClick={(el) => {
                          this.removePulse(el);
                        }}
                      >
                        <i className="material-icons">whatshot</i>
                      </button>
                    </div>
                    <div className="card-content">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information. I am convenient because I require
                        little markup to use effectively.
                      </p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">
                        <i className="material-icons right">close</i>Card Title
                      </span>
                      <p>
                        Here is some more information about this product that is
                        only revealed once clicked on.
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
