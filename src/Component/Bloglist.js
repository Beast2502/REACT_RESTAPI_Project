import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:50
  },
  media: {
    height: 140,
  },
});

export default function Bloglist(props) {
  const classes = useStyles();
  console.log("Blog Page ",props.data)

  const dataBlog = props.data.map((data)=>{
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

  })

  return (
      <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    {dataBlog}
  </>
  );
}