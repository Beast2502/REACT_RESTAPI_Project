import React, { Component } from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = theme =>({
    root: {
        maxWidth: 500,
        margin:50,
        marginLeft: 100,
        height:150,
        background: '#f4c2c2'

      },
      media: {
        height: 140,
      },
    });

 

class Blog extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : this.props.data,
            search : '',
            brandList : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        const filterData = this.state.data.filter(data =>{
            return data.Brand
        })
        this.setState({
            search: event.target.value,
            brandList : this.state.filterData
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('search', this.state.search)
        
    }
    render() {
        const {classes} = this.props;
        const dataBlog = this.state.data.map((data)=>{
            if(data != null){
              return (
                <Card className={classes.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.Brand}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     {data.Variety}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              )
      
            
            }
            else {
              <h1><center>No blogs Added</center></h1>
            }
            
      
        })
      
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}></input>
                    <button type='submit'>Search</button>
                </form>
                {dataBlog}
            </div>
        );
    }
}

export default withStyles(styles)(Blog);