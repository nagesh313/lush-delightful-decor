import { FormControl, Paper, StepContent, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Typography from "@material-ui/core/Typography";
import React from "react";
declare var localStorage: any;
declare var document: any;
function getSteps() {
  return [
    "Help us with your Name",
    "Leave Us your Number",
    "And an Email Perhaps",
    "How about whatsapp!",
  ];
}
// const handleChange = (event: any) => {
//   // setName(event.target.value);
// };
// const validateNumber = (event: any): boolean => {
//   debugger;
//   console.log(event.target);
//   return false;
// };
function getStepContent(step: any) {
  switch (step) {
    case 0:
      return (
        <form
          style={{
            width: "200px",
          }}
          noValidate
          autoComplete="on"
        >
          <FormControl>
            <TextField id="name" type="text" label="Name" />
          </FormControl>
        </form>
      );
    case 1:
      return (
        <form
          style={{
            width: "200px",
          }}
          noValidate
          autoComplete="on"
        >
          <FormControl>
            <TextField id="phone" type="number" label="Phone Number" />
          </FormControl>
        </form>
      );
    case 2:
      return (
        <form
          style={{
            width: "200px",
          }}
          noValidate
          autoComplete="on"
        >
          <FormControl>
            <TextField id="email" type="email" label="Email Id" />
          </FormControl>
        </form>
      );
    case 3:
      return (
        <form
          style={{
            width: "200px",
          }}
          noValidate
          autoComplete="on"
        >
          <FormControl>
            <TextField id="whatsapp" type="number" label="WhatsApp Number" />
          </FormControl>
        </form>
      );
    default:
      return "Unknown step";
  }
}

export default class HorizontalLinearStepper extends React.Component<
  {},
  { activeStep?: any; prevActiveStep?: any }
> {
  name: any;
  phone: any;
  email: any;
  whatsapp: any;
  steps = getSteps();
  constructor() {
    super({});
    this.state = {
      activeStep: 0,
    };
  }
  handleNext = (event: any) => {
    if (this.state.activeStep === 0) {
      this.name = document.getElementById("name").value;
    }
    if (this.state.activeStep === 1) {
      this.phone = document.getElementById("phone").value;
    }
    if (this.state.activeStep === 2) {
      this.email = document.getElementById("email").value;
    }
    if (this.state.activeStep === 3) {
      this.whatsapp = document.getElementById("whatsapp").value;
    }
    if (event.target.textContent === "Finish") {
      this.sendEmail();
    }
    this.setState({ activeStep: this.state.activeStep + 1 });
  };
  sendEmail = () => {
    let count = localStorage.clickcount;
    if (count === undefined || count === 0) {
      count = 1;
    } else {
      count++;
      if (count < 5) {
        this.send();
      }
    }
    localStorage.clickcount = count;
  };
  send = () => {
    debugger;
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.sendgrid.com/v3/mail/send";
    const value =
      "Name: " +
      this.name +
      " Phone : " +
      this.phone +
      " Email:  " +
      this.email +
      " WhatsApp : " +
      this.whatsapp;
    const body = {
      personalizations: [
        {
          to: [
            {
              email: "preetiu.24@gmail.com",
            },
            {
              email: "nagesh3.13@gmail.com",
            },
          ],
          subject: "New Customer Contact",
        },
      ],
      from: {
        email: "nagesh3.13@gmail.com",
      },
      content: [
        {
          type: "text/plain",
          value,
        },
      ],
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify(body),
    };
    fetch(proxyUrl + url, requestOptions)
      .then((blob) => {
        console.log(blob);
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  };
  handleReset = () => {
    this.setState({ activeStep: 0 });
  };
  handleBack = () => {};
  render() {
    return (
      <div className={"teal"} /* className={classes.root} */>
        <Stepper activeStep={this.state.activeStep} orientation="vertical">
          {this.steps.map((label: any, index: any) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div /* className={classes.actionsContainer} */>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    /* className={classes.button} */
                  >
                    {this.state.activeStep === this.steps.length - 1
                      ? "Finish"
                      : "Next"}
                  </Button>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {this.state.activeStep === this.steps.length && (
          <Paper
            className="test123"
            square
            elevation={0} /* className={classes.resetContainer} */
          >
            <Typography>Thank you! We will soon get back to you</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleReset} /* className={classes.button} */
            >
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}
