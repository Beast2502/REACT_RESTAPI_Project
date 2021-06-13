import React, { Component } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import uuid from 'react-uuid';


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
            
        },
        chip: {
            margin: theme.spacing(0.5),
         },
         root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            padding: theme.spacing(0.5),
            margin: 0,
          },
});


class AddPost extends Component {
    constructor(props){
        super(props);
        this.state={
            rows: 5,
			minRows: 5,
			maxRows: 10
        }
    }

   render() {
        
        return (
            <div>
                Add the Post
                <form onSubmit={this.props.handleSubmit}>
                    HEAD LINE
                    <input
                        name = "Headlines"
                        label='Headline'
                        margin="normal"
                        fullWidth
                        onChange = {this.props.handleHeadLine}
                    />
                    CONTENT
                    <textarea
				            rows={this.state.rows}
				            value={this.state.value}
				            placeholder={'Enter your text here...'}
				            onChange={this.props.handleValue}
			            />      
                      
                    <div>
                        <button
                        type="Submit"
                        value="submit"
                        variant="container"
                        color = "secondary"
                       
                        ><SaveIcon/>Submit
                        </button>
                    </div>
                 
                  </form>
                
            </div>
        );
    }
}

export default (AddPost);
