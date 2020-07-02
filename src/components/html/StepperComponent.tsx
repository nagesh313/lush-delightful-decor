import { FormControl, Paper, StepContent, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Typography from "@material-ui/core/Typography";
import React from "react";

// const useStyles = makeStyles((theme) => ({
//   form: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
//   root: {
//     width: "100%",
//   },
//   button: {
//     marginTop: theme.spacing(1),
//     marginRight: theme.spacing(1),
//   },
//   actionsContainer: {
//     marginBottom: theme.spacing(2),
//   },
//   resetContainer: {
//     padding: theme.spacing(3),
//   },
// }));

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
            <TextField id="Phone" type="number" label="Phone Number" />
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
            <TextField id="Email" type="email" label="Email Id" />
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
            <TextField id="WhatsApp" type="number" label="WhatsApp Number" />
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
  // const classes = useStyles();
  steps = getSteps();
  constructor() {
    super({});
    this.state = {
      activeStep: 0,
    };
  }
  componentDidMount() {}
  // isStepOptional = (step: any) => {
  //   return false;
  // };

  // isStepSkipped = (step: any) => {
  //   return skipped.has(step);
  // };

  // handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };

  // handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }
  // }
  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
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
