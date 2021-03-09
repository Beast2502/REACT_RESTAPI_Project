import React, { Component } from 'react';


import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {withStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import {withFormik ,Form} from 'formik';
import {FormikTextField} from 'formik-material-fields';
import ImageIcon from '@material-ui/icons/Image';
import SaveIcon from '@material-ui/icons/Save';
import { Button } from '@material-ui/core';

const styles = theme =>({
        container:{
            margin: theme.spacing.unit * 1
        },
        formControl:{
            margin:theme.spacing.unit ,
         
        },
        formText :{
            padding :theme.spacing.unit 
        },
        Save:{
            marginBottom : theme.spacing.unit *2
        },
        imageContainer :{
            marginBottom: theme.spacing.unit * 3
        },
        saveButton:{
           
            marginTop : theme.spacing.unit * 8
        },
        selectBox:{
            marginTop : theme.spacing.unit * 2,
            marginRight :theme.spacing.unit * 3,
            border : 0,
            
        }
});


class AddPost extends Component {

    constructor (props) {
        super(props);
        this.state = { 
            Headline: "HeadlinesNew ",
            EnglishDesc : "EnglishDesc ",
            RegionalDesc: "RegionalDesc ",
            country: '', 
            region: '' ,
            image1: " "
            
        };
        this.handleHeadline = this.handleHeadline.bind(this);
        this.handleRegionalDesc = this.handleRegionalDesc.bind(this);
        this.handleEnglishDesc = this.handleEnglishDesc.bind(this);
        this.handleImage1 = this.handleImage1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }
     
      

      handleHeadline(event){
          this.setState({Headline:event.target.value});
          
      }

      handleRegionalDesc(event){
          this.setState({RegionalDesc: event.target.value})
      }

      handleEnglishDesc(event){
        this.setState({EnglishDesc: event.target.value})
    }

    handleImage1(event){
        this.setState({image1: event.target.value})
    }
    

      handleSubmit(event){
          console.log(this.state.Headline,this.state.RegionalDesc,this.state.EnglishDesc,this.state.country,this.state.region,this.state.image1);
          event.preventDefault()
      }

      selectCountry (val) {
        this.setState({ country: val });
      }
    
      selectRegion (val) {
        this.setState({ region: val });
      }
    
    render() {
        const {classes} = this.props;
        const { country, region } = this.state;
        return (
            <div className={classes.container}>
                <Form className={classes.formControl} onSubmit={this.handleSubmit}>
                    <FormikTextField
                        name = "Headlines"
                        label='Headline'
                        margin="normal"
                        fullWidth
                        className = {classes.formText}
                        value={this.state.Headline}
                        onChange = {this.handleHeadline}
                    >
                
                    </FormikTextField>

                    <div className={classes.imageContainer}>
                        <input type="file" onChange={this.handleImage1} ></input>
                        <Button
                        variant="container"
                        color="primary"
                        
                        
                        ><ImageIcon />Upload the Image

                        </Button>
                       
                    </div>

                    <div>
                        <input type="file" ></input>
                        <Button
                        variant="container"
                        color="primary"
                        
                        
                        ><ImageIcon />Upload the Addtional Images

                        </Button>
                        
                    </div>
                   
                    <FormikTextField
                        name = "Regional Description"
                        label= "Regional Description"
                        margin="normal"
                        fullWidth
                        className = {classes.formText}
                        value = {this.state.RegionalDesc}
                        onChange = {this.handleRegionalDesc}
                        
                        
                    >
                        
                    </FormikTextField>
                   
                    <FormikTextField
                        name = "Description_English"
                        label=  "Description_English"
                        margin= "10px"
                        fullWidth
                        className = {classes.formText}
                        value = {this.state.EnglishDesc}
                        onChange = {this.handleEnglishDesc}
                        
                    >
                        
                    </FormikTextField>
                    
                         <CountryDropdown
                            className={classes.selectBox}
                            value={country}
                            onChange={(val) => this.selectCountry(val)} />

                            <RegionDropdown
                            className={classes.selectBox}
                            country={country}
                            value={region}
                            onChange={(val) => this.selectRegion(val)} />
                    

                   
                    <div className={classes.Save}>
                        <Button
                        type="Submit"
                        value="submit"
                        variant="container"
                        color = "secondary"
                        className ={classes.saveButton}
                        ><SaveIcon/>Submit
                        </Button>
                    </div>
                   
                   
  
                   
                </Form>
                
            </div>
        );
    }
}

export default withFormik({})(withStyles(styles)(AddPost));
