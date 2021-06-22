import React, { Component } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import uuid from 'react-uuid';
import { withStyles, makeStyles } from '@material-ui/core/styles';



const styles = theme => ({
    button:{
        border: 'none',
        borderRadius : 5 ,
        background: '#FF033E',
        height : 50,
        width : 150,
        marginRight : 10,
        marginTop: 20,
        marginLeft: 200
      
      },
      input:{
        marginTop: 20,
        height: 40,
        width : 200,
        borderRadius : 5,
        marginRight : 40,
        marginLeft: 5,
        
      },

      shift:{
        marginLeft: 40,
        display: 'block'
      }
});


class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: 5,
            minRows: 5,
            maxRows: 10
        }
    }

    render() {

       
    const { classes } = this.props;

        return (
            <div className={classes.shift} >
                <div><center>Add Post</center></div>
                <form className={classes.shift} onSubmit={this.props.handleSubmit}>
                    HEAD LINE
                    <input
                        name="Headlines"
                        label='Headline'
                        margin="normal"
                        fullWidth
                        onChange={this.props.handleHeadLine}
                        className ={classes.input}
                    />
                    CONTENT
                    <textarea
                        rows={this.state.rows}
                        value={this.state.value}
                        placeholder={'Enter your text here...'}
                        onChange={this.props.handleValue}
                        className = {classes.input}
                    />

                    <div>
                        <button
                            type="Submit"
                            value="submit"
                            variant="container"
                            color="secondary"
                            className = {classes.button}

                        ><SaveIcon />Submit
                        </button>
                    </div>

                </form>

            </div>
        );
    }
}

export default withStyles(styles)(AddPost);
