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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ExcelLoad from "components/excel/excel.jsx"
import { Grid } from "@material-ui/core";


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={9}>
        <Card>
        <CardHeader color="vanti">
            <h4 className={classes.cardTitleWhite}>Raw Data</h4>
            <p  className={classes.cardCategoryWhite}>raw data from user</p>
          </CardHeader>
          <CardBody>
            <ExcelLoad/>
          </CardBody>
        </Card>
        
      </GridItem>

    </GridContainer>
    {/* <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="vanti">
            <h4 className={classes.cardTitleWhite}>Raw Data</h4>
            <p className={classes.cardCategoryWhite}>
              raw data from user
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="vanti"
              tableHead={["SNR[dB]", "Vin[V]", "f[MHz]", "PGA[dB]"]}
              tableData={[
                ["8.55", "100", "100", "15"],
                ["8.23", "100", "100", "15"],
                ["7.87", "10", "100", "9"],
                ["9.01", "10", "100", "9"],
                ["8.66", "10", "10", "9"],
                ["8.14", "100", "100", "15"],
                ["8.68", "100", "100", "15"],
                ["7.46", "10", "100", "9"],
                ["9.21", "10", "100", "9"],
                ["8.48", "10", "10", "9"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer> */}
    </div>
  );
}

TableList.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(TableList);
