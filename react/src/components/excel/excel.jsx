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
// import Button from "components/CustomButtons/Button.jsx"
import image from "assets/img/vanti_block.svg";
import DashboardNavbarLinks from "components/Navbars/DashboardNavbarLinks.jsx";
import Hidden from "@material-ui/core/Hidden";

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
import { whiteColor,vantiColor } from "assets/jss/material-dashboard-react";


import 'bootstrap/dist/css/bootstrap.css';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import { Jumbotron, Col, Input, InputGroup, InputGroupAddon, FormGroup, Label, Button, Fade, FormFeedback, Container, rCard } from 'reactstrap';

import "assets/jss/material-dashboard-react";

class ExcelLoad extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isOpen: false,
      dataLoaded: false,
      isFormInvalid: false,
      rows: null,
      cols: null
    }
    this.fileHandler = this.fileHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.openFileBrowser = this.openFileBrowser.bind(this);
    this.renderFile = this.renderFile.bind(this);
    // this.openNewPage = this.openNewPage.bind(this);
    this.fileInput = React.createRef();
  }

  renderFile = (fileObj) => {
      //just pass the fileObj as parameter
      ExcelRenderer(fileObj, (err, resp) => {
        if(err){
          console.log(err);            
        }
        else{
          this.setState({
            dataLoaded: true,
            cols: resp.cols,
            rows: resp.rows
          });
        }
      }); 
  }

  fileHandler = (event) => {    
    if(event.target.files.length){
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      
      //check for file extension and pass only if it is .xlsx and display error message otherwise
      if(fileName.slice(fileName.lastIndexOf('.')+1) === "xlsx"){
        this.setState({
          uploadedFileName: fileName,
          isFormInvalid: false
        });
        this.renderFile(fileObj)
      }    
      else{
        this.setState({
          isFormInvalid: true,
          uploadedFileName: ""
        })
      }
    }               
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  openFileBrowser = () => {
    this.fileInput.current.click();
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Container> */}
        {/* <GridItem> */}
        
       
        <form>
          <FormGroup row>
            <Label for="exampleFile" xs={12} sm={12} lg={1} size="lg">Upload</Label>       

            <Col xs={12} sm={12} lg={4}>                                                     
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  
                  <Button color="info" style={{color: "white", zIndex: 20}} onClick={this.openFileBrowser.bind(this)}>
                      <i className="cui-file"></i> Browse&hellip;
                  </Button>

                  <input type="file" 
                         hidden onChange={this.fileHandler.bind(this)} 
                         ref={this.fileInput} onClick={(event)=> { event.target.value = null }} 
                        //  style={{"padding":"200px"}}
                         />                                
                </InputGroupAddon>
                
                <Input  type="text" className="form-control" value={this.state.uploadedFileName} 
                        readOnly invalid={this.state.isFormInvalid} />                                              
                
                <FormFeedback>    
                  <Fade in={this.state.isFormInvalid} tag="h6" style={{fontStyle: "italic"}}>
                    Please select a .xlsx file only !
                  </Fade>                                                                
                </FormFeedback>
              </InputGroup>     
            </Col>                                                   
          </FormGroup>   
        </form>

        {this.state.dataLoaded && 
        <div>
          {/* <Card> */}
          <Table
              tableHeaderColor="vanti"
              tableHead={this.state.rows[0]}
              tableData={this.state.rows}
            
            />
              {/* <OutTable data={this.state.rows} columns={this.state.cols} 
              tableClassName="ExcelTable2007" tableHeaderRowClass="heading" /> */}
            
          {/* </Card>   */}
          
        </div>}
        {/* </GridItem> */}
        {/* </Container> */}
        
      </div>
    );
  }
}

export default ExcelLoad;