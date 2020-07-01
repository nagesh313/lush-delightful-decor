import homeRoof from "@iconify/icons-mdi/home-roof";
import { Icon } from "@iconify/react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import BathtubIcon from "@material-ui/icons/Bathtub";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import DeckIcon from "@material-ui/icons/Deck";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import HomeIcon from "@material-ui/icons/Home";
import KitchenIcon from "@material-ui/icons/Kitchen";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import PropTypes from "prop-types";
import React from "react";
import AdvancedGridList from "./GridList";
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const tileData = [
  {
    img: "actual/1.jpeg",
    featured: true,
  },
  {
    img: "actual/2.jpeg",
    featured: false,
  },
  {
    img: "actual/3.jpeg",
    featured: false,
  },
  {
    img: "actual/4.jpeg",
    featured: true,
  },
];

const kidsData = [
  {
    img: "tabs/kids/1.png",
    featured: true,
  },
  {
    img: "tabs/kids/2.png",
    featured: false,
  },
  {
    img: "tabs/kids/3.jpeg",
    featured: false,
  },
  {
    img: "tabs/kids/5.jpeg",
    featured: true,
  },
];
const livingData = [
  {
    img: "tabs/living/1.png",
    featured: true,
  },
  {
    img: "tabs/living/2.jpeg",
    featured: false,
  },
  {
    img: "tabs/living/4.jpeg",
    featured: false,
  },
  {
    img: "tabs/living/5.png",
    featured: true,
  },
];
const accessoryData = [
  {
    img: "tabs/accessories/1.jpg",
    featured: true,
  },
  {
    img: "tabs/accessories/2.jpg",
    featured: false,
  },
  {
    img: "tabs/accessories/4.jpg",
    featured: false,
  },
  {
    img: "tabs/accessories/3.jpg",
    featured: true,
  },
];
export default class ScrollableTabsButtonForce extends React.Component<
  {},
  { value: any; data: any }
> {
  classes: any;
  value: any;
  constructor(props: any) {
    super(props);
    this.state = { value: 0, data: tileData };
  }
  componentDidMount() {
    // this.classes = useStyles();
  }
  handleChange = (event: any, newValue: any) => {
    //homeDesiging
    if (newValue === 0) {
      this.setState({
        value: newValue,
        data: tileData,
      });
    }
    //living
    if (newValue === 1) {
      this.setState({
        value: newValue,
        data: livingData,
      });
    }
    //bed
    if (newValue === 2) {
    }
    //bath
    if (newValue === 3) {
    }
    //kitched
    if (newValue === 4) {
    }
    //terrace
    if (newValue === 5) {
    }
    //kids
    if (newValue === 6) {
      this.setState({
        value: newValue,
        data: kidsData,
      });
    } //furniture
    if (newValue === 7) {
    } //wall
    if (newValue === 8) {
    } //wall
    if (newValue === 9) {
      this.setState({
        value: newValue,
        data: accessoryData,
      });
    }
    // setValue(newValue);
  };
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab
              label="Home Designing"
              icon={<HomeIcon fontSize="large" />}
              {...a11yProps(0)}
            />
            <Tab
              label="Living Room"
              icon={<EventSeatIcon fontSize="large" />}
              {...a11yProps(1)}
            />
            <Tab
              label="Bedroom"
              icon={<SingleBedIcon fontSize="large" />}
              {...a11yProps(2)}
            />
            <Tab
              label="Bathroom"
              icon={<BathtubIcon fontSize="large" />}
              {...a11yProps(3)}
            />
            <Tab
              label="Kitchen"
              icon={<KitchenIcon fontSize="large" />}
              {...a11yProps(4)}
            />
            <Tab
              label="Terrace"
              icon={<Icon icon={homeRoof} width="32" height="32" />}
              {...a11yProps(5)}
            />
            <Tab
              label="Kids Room"
              icon={<ChildCareIcon fontSize="large" />}
              {...a11yProps(6)}
            />
            <Tab
              label="Furniture"
              icon={<DeckIcon fontSize="large" />}
              {...a11yProps(7)}
            />
            <Tab
              label="Wall Color and Design"
              icon={<WallpaperIcon fontSize="large" />}
              {...a11yProps(8)}
            />
            <Tab
              label="Accessories"
              icon={<SettingsBrightnessIcon fontSize="large" />}
              {...a11yProps(9)}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>
        <TabPanel value={this.state.value} index={0}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>
        <TabPanel value={this.state.value} index={0}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>{" "}
        <TabPanel value={this.state.value} index={4}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>
        <TabPanel value={this.state.value} index={5}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>
        <TabPanel value={this.state.value} index={6}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>
        <TabPanel value={this.state.value} index={7}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>
        <TabPanel value={this.state.value} index={8}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>
        <TabPanel value={this.state.value} index={9}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>>
        </TabPanel>
      </div>
    );
  }
}
