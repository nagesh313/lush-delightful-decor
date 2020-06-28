import React from "react";
export class FooterComponent extends React.Component {
  render() {
    return (
      <div>
        <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About us</h5>
                <p className="grey-text text-lighten-4">
                  You can use rows and columns here to organize your footer
                  content.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Follow us on</h5>
                <ul>
                  <li>
                    <a
                      className="grey-text text-lighten-3 valign-wrapper"
                      href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nagesh3.13@gmail.com"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: "30px", width: "30px" }}
                        alt=""
                        className="circle responsive-img"
                        src="social/google-plus--v1.png"
                      />
                      Gmail
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3 valign-wrapper"
                      href="http://www.facebook.com"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: "30px", width: "30px" }}
                        alt=""
                        className="circle responsive-img"
                        src="social/facebook-circled-50.png"
                      />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3 valign-wrapper"
                      href="http://www.instagram.com"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: "30px", width: "30px" }}
                        alt=""
                        className="circle responsive-img"
                        src="social/instagram-50-2.png"
                      />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3 valign-wrapper"
                      href="http://www.youtube.com"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: "30px", width: "30px" }}
                        alt=""
                        className="circle responsive-img"
                        src="social/youtube-50-2.png"
                      />
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3 valign-wrapper"
                      href="http://www.twitter.com"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: "30px", width: "30px" }}
                        alt=""
                        className="circle responsive-img"
                        src="social/twitter-circled-50.png"
                      />
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2020 LUSH INTERIOR DECOR- PROVIDING HOME AND INTERIOR DESIGN
              IDEAS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
