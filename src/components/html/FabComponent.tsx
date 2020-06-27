import React from "react";
declare const Materialize: any;
declare const $: any;
export class Fabcomponent extends React.Component {
  render() {
    return (
      <div>
        <div className="fixed-action-btn">
          <button className="btn-floating btn-large red">
            <i className="large material-icons">mode_edit</i>
          </button>
          <ul>
            <li>
              <button className="btn-floating red">
                <i className="material-icons">insert_chart</i>
              </button>
            </li>
            <li>
              <button className="btn-floating yellow darken-1">
                <i className="material-icons">format_quote</i>
              </button>
            </li>
            <li>
              <button className="btn-floating green">
                <i className="material-icons">publish</i>
              </button>
            </li>
            <li>
              <button className="btn-floating blue">
                <i className="material-icons">attach_file</i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
