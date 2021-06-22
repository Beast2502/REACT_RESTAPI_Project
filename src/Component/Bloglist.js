import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Component } from 'react';

const styles = theme =>({
  root: {
    maxWidth: 500,
    margin: 50,
    marginLeft: 280,
    height: 150,
    background: '#f4c2c2'
  },
  media: {
    height: 140,
  },

})

class Bloglist extends Component {

  render(){
    const { classes } = this.props;
    const dataBlog = this.props.data.map((data) => {
      if (data != null) {
        return (
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.headline}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {data.value}
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
  

    return(
      <>
      <div><center>Dynamic Blogs</center></div>
      {dataBlog}
    </>
    )
  }
}




export default withStyles(styles)(Bloglist)