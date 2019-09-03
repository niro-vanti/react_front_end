/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
import Button from "components/CustomButtons/Button.jsx"
import image from "assets/img/vanti_block.svg";
import DashboardNavbarLinks from "components/Navbars/DashboardNavbarLinks.jsx";
import Hidden from "@material-ui/core/Hidden";
import ExcelLoad from "components/excel/excel.jsx"

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  paramChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { sizeHeight } from "@material-ui/system";
import { callbackify } from "util";
import { whiteColor } from "assets/jss/material-dashboard-react";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* ------------------------------------- */}
        <GridContainer>
          {/* upload file */}
          <GridItem xs={12} sm={12} md={4}> 
            <Card>
              <CardHeader color = "vanti" stats icon>
                <CardIcon color = "vanti">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Drag & Drop</p>
                <h3 className={classes.cardTitle}>Data Upload</h3>
              </CardHeader>
              <CardBody>
                <div className="App">
                {/* <FilePond allowMultiple={true} server="http://192.168.33.10"/> */}
                <FilePond 
                    // stylePanelAspectRatio={"0.15"} 
                    allowMultiple={true} 
                    // stylePanelLayout={"integrated"}
                    // width={calc(50%)}
                    server="https://www.googleapis.com/upload/drive/v3/files?uploadType=media"
                />
                </div>
                <Button color="vanti" href="#" size={"tp"} className={classes.className}>RUN</Button> 
              </CardBody>
              <CardFooter stats>
              <div className={classes.stats}>
                  <AccessTime /> Last File: Raw_Data.csv 
              </div>
              </CardFooter>
            </Card>
          </GridItem> 
          {/* export model */}
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color = "vanti" stats icon>
                <CardIcon color = "vanti">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>export model</p>
                <h3 className={classes.cardTitle}>Export to Selected Tool</h3>
              </CardHeader>
              <CardBody>
                <Hidden smDown implementation="css">
                  <DashboardNavbarLinks style={{justifyContent: 'center'}}></DashboardNavbarLinks>
                </Hidden>
                {/* <h3 style={{ color: whiteColor }}>Matlab Selected</h3> */}
                <h3 className={classes.cardTitle} style={{color: whiteColor}}>
                  Matlab Selected
                </h3>
                <Button color="vanti" href="#" size={"tp"} 
                  className={classes.className}>Export
                </Button> 
              </CardBody>
              <CardFooter stats>
              <div className={classes.stats}>
                  <AccessTime /> Last Selected: Matlab
              </div>
              </CardFooter>
            </Card>

          </GridItem>
          {/* to do */}
          <GridItem xs={12} sm={12} md={4}>
            <CustomTabs
              title="Tasks:"
              headerColor="vanti"
              tabs={[
                {
                  tabName: "To Do",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0,1,2]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Bugs",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 1]}
                      tasksIndexes={[0, 1,2]}
                      tasks={bugs}
                    />
                  )
                },
                
                {
                  tabName: "Server",
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0,1,2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
        {/* ----------------------------------- */}
        <GridContainer>
          {/* model n formula */}
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="vanti" stats icon>
                <CardIcon color="vanti">
                  {/* <Icon>info_outline</Icon> */}
                </CardIcon>
                <p className={classes.cardCategory}>results</p>
                <h3 className={classes.cardTitle}>VantiNet model</h3>
              </CardHeader>
              <CardBody>
              <h2 style={{textAlign:"center"}}  className={classes.cardTitle}>ENoB[bits] = 9.5 - 1.41 * Vin - 0.84 * f - 0.33 * PGA</h2>
              <img style={{alignItems: "center"}}  style={{width: 50+"em"}} src={image} alt="image" className={classes.img} />

              </CardBody>
            </Card>
          </GridItem>
          {/* data preview */}
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="vanti">
                <h4 className={classes.cardTitleWhite}>Raw Data Preview</h4>
                <p className={classes.cardCategoryWhite}>
                  first entries
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="vanti"
                  tableHead={["ENoB[bits]", "Vin[mV]", "f[MHz]", "PGA[dB]"]}
                  tableData={[
                    ["8.55", "100", "100", "15"],
                    ["8.23", "100", "100", "15"],
                    ["7.19", "100", "100", "15"],
                    ["8.71", "10", "10", "9"],
                    ["8.66", "10", "10", "9"]

                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        {/* ----------------------------------------- */}
        <GridContainer>    
          {/* param chart */}    
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="vanti">
                <ChartistGraph
                  className="ct-chart"
                  data={paramChart.data}
                  type="Bar"
                  options={paramChart.options}
                  responsiveOptions={paramChart.responsiveOptions}
                  listener={paramChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Parameter contribution</h4>
                <p className={classes.cardCategory}>
                  Lastest  Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          {/* cost funciton */}
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="vanti">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Cost Function</h4>
                <p className={classes.cardCategory}>
                  Last Run Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 10 mins ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>   
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
