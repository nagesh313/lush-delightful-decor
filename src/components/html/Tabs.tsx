import React from "react";
export class TabsComponent extends React.Component {
  render() {
    return (
      <div style={{ paddingBottom: "5px", paddingTop: "5px" }}>
        <div className="row">
          <div className="col s2 offset-s1">
            <ul className="tabs">
              <li className="tab">
                <a href="#test1">Tab 1</a>
              </li>
              <li className="tab">
                <a className="active" href="#test2">
                  Tab 2
                </a>
              </li>
              <li className="tab">
                <a href="#test3">Tab 3</a>
              </li>
              <li className="tab">
                <a href="#test4">Tab 4</a>
              </li>
              <li className="tab">
                <a href="#test5">Tab 5</a>
              </li>
              <li className="tab">
                <a href="#test6">Tab 6</a>
              </li>
            </ul>
          </div>
          <div className="col s9">
            <div
              id="test1"
              style={{ height: "318px", paddingTop: "5px" }}
              className="container row"
            >
              <div className=" m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/1"
                />
              </div>
              <div className="m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/2"
                />
              </div>
            </div>
            <div id="test2" style={{ height: "318px" }} className="col s12">
              <div className=" m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/3"
                />
              </div>
              <div className="m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/4"
                />
              </div>
              <div className=" m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/5"
                />
              </div>
              <div className="m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/6"
                />
              </div>
            </div>
            <div id="test3" style={{ height: "318px" }} className="col s12">
              <div className=" m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/7"
                />
              </div>
              <div className="m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/8"
                />
              </div>
            </div>
            <div id="test4" style={{ height: "318px" }} className="col s12">
              <div className=" m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/9"
                />
              </div>
              <div className="m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/10"
                />
              </div>
            </div>
            <div id="test5" style={{ height: "318px" }} className="col s12">
              <div className=" m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/11"
                />
              </div>
              <div className="m3 s2">
                <img
                  alt=""
                  className="materialboxed"
                  data-caption="A picture of a way with a group of trees in a park"
                  width="250"
                  src="https://lorempixel.com/800/400/nature/12"
                />
              </div>
            </div>
            <div id="test6" style={{ height: "318px" }} className="col s12">
              Test 6
            </div>
            <div id="test7" style={{ height: "318px" }} className="col s12">
              Test 7
            </div>
            <div id="test8" style={{ height: "318px" }} className="col s12">
              Test
            </div>
          </div>
        </div>
      </div>
    );
  }
}
