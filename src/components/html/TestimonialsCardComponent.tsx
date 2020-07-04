import React from "react";
export class TestimonialsCardComponent extends React.Component {
  removePulse(ele: any) {
    ele.currentTarget.classList.remove("pulse1");
  }
  render() {
    return (
      <div id="testimonials-component" className="scrollspy">
        <div className="container">
          <div className="row" id="cards-row">
            <br></br>
            <h3 className="center" style={{ fontFamily: "cursive" }}>
              Our Customer's Testimonials
            </h3>
            <ul className="testimonial-card-list">
              <li style={{ opacity: 0 }}>
                <div className="col m3 s12">
                  <div className="card hoverable">
                    <div className="card-content center">
                      <button
                        className="btn-floating btn-large waves-effect waves-light pulse"
                        onClick={(el) => {
                          this.removePulse(el);
                        }}
                      >
                        <i className="material-icons">format_quote</i>
                      </button>
                    </div>
                    <div className="card-content">
                      <p>
                        With Lush delightful, it was value for money products
                        and designs, from private individuals looking to remodel
                        their homes. She is well aware of the latest products
                        and design trends in the market, loved the concept -{" "}
                        <b>Ankit</b>
                      </p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">
                        <i className="material-icons right">close</i>Card Title
                      </span>
                      <p>
                        I am happy to have collaborated with her to design my
                        dream home and am very pleased with the result. Wishing
                        her all the best for future endeavors.
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
                        className="btn-floating btn-large waves-effect waves-light pulse"
                        onClick={(el) => {
                          this.removePulse(el);
                        }}
                      >
                        <i className="material-icons">thumb_up</i>
                      </button>
                    </div>
                    <div className="card-content">
                      <p>
                        I am happy to have collaborated with her to design my
                        dream home and am very pleased with the result. Wishing
                        her all the best for future endeavors - <b>Divya</b>
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
                        Thank you for making the whole process so enjoyable. I
                        absolutely love my kitchen. Both Style at Home and
                        Living interiors is lifted, everyone thinks it is
                        amazing. You have been a pleasure to work with and
                        wishing you all the success - <b>Chetna</b>
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
                        The exceptional service that I received from Lush
                        Delightful Decor is beyond compare. She has a wonderful
                        eye for detail and color. She was able to take my ideas
                        and transform them into realities. I couldn’t have had a
                        better and more rewarding relationship. I recommend Lush
                        Delightful Decor - <b>Rahul</b>
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
