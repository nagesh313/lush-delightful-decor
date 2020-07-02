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
const bathData = [
  {
    img: "tabs/bathroom/1.jpg",
    featured: true,
  },
  {
    img: "tabs/bathroom/2.jpg",
    featured: false,
  },
  {
    img: "tabs/bathroom/3.jpg",
    featured: false,
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
const bedData = [
  {
    img: "tabs/bedroom/1.jpg",
    featured: false,
  },
  {
    img: "tabs/bedroom/2.jpg",
    featured: false,
  },
  {
    img: "tabs/bedroom/3.jpg",
    featured: false,
  },
  {
    img: "tabs/bedroom/4.jpg",
    featured: false,
  },
];
const kitchedData = [
  {
    img: "tabs/kitchen/1.jpg",
    featured: false,
  },
  {
    img: "tabs/kitchen/3.jpg",
    featured: false,
  },
  {
    img: "tabs/kitchen/2.jpg",
    featured: true,
  },
];
const terraceData = [
  {
    img: "tabs/terrace/1.jpg",
    featured: false,
  },
  {
    img: "tabs/terrace/2.jpg",
    featured: false,
  },
];
const wallData = [
  {
    img: "tabs/wall/1.jpg",
    featured: true,
  },
];
const furnitureData = [
  {
    img: "tabs/furniture/1.jpg",
    featured: false,
  },
  {
    img: "tabs/furniture/2.jpg",
    featured: false,
  },
  {
    img: "tabs/furniture/3.jpg",
    featured: false,
  },
  {
    img: "tabs/furniture/4.jpg",
    featured: false,
  },
  {
    img: "tabs/furniture/5.jpeg",
    featured: false,
  },
  {
    img: "tabs/furniture/6.jpg",
    featured: false,
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
  componentDidMount() {}
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
      this.setState({
        value: newValue,
        data: bedData,
      });
    }
    //bath
    if (newValue === 3) {
      this.setState({
        value: newValue,
        data: bathData,
      });
    }
    //kitched
    if (newValue === 4) {
      this.setState({
        value: newValue,
        data: kitchedData,
      });
    }
    //terrace
    if (newValue === 5) {
      this.setState({
        value: newValue,
        data: terraceData,
      });
    }
    //kids
    if (newValue === 6) {
      this.setState({
        value: newValue,
        data: kidsData,
      });
    } //furniture
    if (newValue === 7) {
      this.setState({
        value: newValue,
        data: furnitureData,
      });
    } //wall
    if (newValue === 8) {
      this.setState({
        value: newValue,
        data: wallData,
      });
    } //accessory
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
          <div style={{ textAlign: "center" }}>
            Everyone wants their house to be decorated with creative ideas and
            get a great relaxing and smoothening environment, you give us an
            empty space and we will give back to you a creative space filled
            with great and astonishing ideas.
          </div>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <div style={{ textAlign: "center" }}>
            Everyone wants their living room to be relaxing spacious and stress
            free. We provide our clients with designs which fulfills their
            requirement.
          </div>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <div style={{ textAlign: "center" }}>
            We honestly feel that bedroom designing should be done with utmost
            care and it should be in such a way that gives you space where you
            can forget your stress and relax.
          </div>{" "}
          <AdvancedGridList data={this.state.data}></AdvancedGridList>
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>
        </TabPanel>
        <TabPanel value={this.state.value} index={4}>
          <div style={{ textAlign: "center" }}>
            <div>U- Shaped Kitchen </div>
            <div>L- Shaped Kitchen </div>
            <div> Galley Kitchen Island</div>
            <div> Kitchen Peninsula</div> <div> Parallel Kitchen</div>
            The kitchen is one of the most important part of a home. It is one
            of the area in Interior Designing which has picked up rapidly in few
            years. Many a people are very much interested to give their kitchen
            a complete new and gradient look.
          </div>{" "}
          <AdvancedGridList data={this.state.data}></AdvancedGridList>
        </TabPanel>
        <TabPanel value={this.state.value} index={5}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>
        </TabPanel>
        <TabPanel value={this.state.value} index={6}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>
        </TabPanel>
        <TabPanel value={this.state.value} index={7}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>
        </TabPanel>
        <TabPanel value={this.state.value} index={8}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>
        </TabPanel>
        <TabPanel value={this.state.value} index={9}>
          <AdvancedGridList data={this.state.data}></AdvancedGridList>
        </TabPanel>
      </div>
    );
  }
}
