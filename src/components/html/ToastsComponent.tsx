import React from "react";
declare const Materialize: any;
export class ToastComponent extends React.Component {
  componentDidMount() {
    setTimeout(this.display, 1000, "Welcome message 1");
    setTimeout(this.display, 5000, "Welcome message 2");
    setTimeout(this.display, 9000, "Welcome message 3");
    setTimeout(this.display, 13000, "Welcome message 4");
    setTimeout(this.display, 17000, "Welcome message 5");
  }
  display(msg: any) {
    const toast = Materialize.toast({
      html: msg,
      displayLength: 5000,
      classes: "rounded"
    });
  }
  render() {
    return <div></div>;
  };
}
