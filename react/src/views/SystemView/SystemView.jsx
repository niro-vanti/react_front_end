import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import image from "assets/img/system.svg";
import logo from "assets/img/logo_v3.svg";
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import SystemViewStyle from "assets/jss/material-dashboard-react/views/SystemViewStyle.jsx";

class SystemView extends React.Component {
  state = {
    imgae: image,
    hasImage : true,
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleImageClick = image => {
    this.setState({ image: image });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <GridContainer>
          <GridItem xs = {12} sm = {6} md = {3}>
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.    
                 drag n drop any file to start
              </p>
              <FilePond/>
            </div>

          </GridItem>

        </GridContainer> */}
        <GridContainer>
          <GridItem xs = {24} sm={12} md={12}>
            <img src={image} alt="image" className={classes.img} />
          </GridItem>    
             
        </GridContainer>

      </div>
    );
  }
}

SystemView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(SystemViewStyle)(SystemView);