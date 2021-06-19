import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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

export default function Bloglist(props) {
  const classes = useStyles();
  console.log("Blog Page ",props.data)

  const dataBlog = props.data.map((data)=>{
      if(data != null){
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

  return (
      <>
    {dataBlog}
  </>
  );
}