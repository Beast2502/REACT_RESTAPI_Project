import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
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
});



class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      search: '',
      searchValue : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    this.setState({
        search : this.state.searchValue
    })
  }
  render() {

    const { classes } = this.props;
    let lowerSearch = this.state.search.toLowerCase()
    console.log(lowerSearch)
    function checkData(data) {

      return data.Brand.toLowerCase().includes(lowerSearch);
    }
  
    const dataBlog = this.state.data.filter(checkData).map((data) => {

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






    })

    return (

      <div>
        <div><center>Static Blogs</center></div>

        <input onChange={this.handleChange}></input>
        <button type='submit' onClick={this.handleSubmit}>Search</button>

        {dataBlog}
      </div>
    );
  }
}

export default withStyles(styles)(Blog);