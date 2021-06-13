import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import {ThemeProvider, withStyles} from '@material-ui/core/styles';

// components 
import Resume from './Resume';
import AddPost from './AddPost';
import Bloglist from './Bloglist';


//routes 
import {Switch,Route,NavLink} from 'react-router-dom';
//Drawer imports 
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider'

const drawerWidth = 240;
const styles = theme =>({
    root:{
        display:'flex'
    },
    toolbar:{
       paddingRight: 24 
    },
    appBar:{
        zIndex : theme.zIndex.drawer +1,
        transition : theme.transitions.create(['width','margin'],{
            easing:theme.transitions.easing.sharp,
            duration: theme.transitions.duration
        }),
    },
    appBarShift:{
        transition : theme.transitions.create(['width','margin'],{
            easing:theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft:drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`

    },
    appbarSpacer : theme.mixins.toolbar,
    drawerPaper :{
        position : "relative",
        whitespace : "noWrap",
        width : drawerWidth,
        transition:theme.transitions.create('width',{
            easing: theme.transitions.easing.sharp,
            duration:theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose:{
        overFlowX: 'hidden',
        width: theme.spacing.unit * 7,
        transition:theme.transitions.create('width',{
            easing: theme.transitions.easing.sharp,
            duration:theme.transitions.duration.leavingScreen
        })
    },
    toolbarIcon :{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding : '0 8px',
        ...theme.mixins.toolbar
    },

    content:{
        flexGrow:1,
        padding:theme.spacing.units * 3,
        height:'100vh',
        overflow: 'auto'
    }
})
class AdminPortal extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: true,
            Headline: "",
            value: '',
            arr:[],
           
           
        }
        this.handleHeadLine = this.handleHeadLine.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleHeadLine(event){
        this.setState({Headline:event.target.value})
    }

    handleValue(event){
        const textareaLineHeight = 24;
        const { minRows, maxRows } = this.state;
        const previousRows = event.target.rows;
          event.target.rows = minRows; // reset number of rows in textarea 
        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
                event.target.rows = currentRows;
            }
    
        if (currentRows >= maxRows) {
                event.target.rows = maxRows;
                event.target.scrollTop = event.target.scrollHeight;
            }
        this.setState({value:event.target.value})
    }

    handleSubmit(event){
        
        let blog={
            headline: this.state.Headline,
            value: this.state.value 
          }

        this.state.arr.push(blog);
        console.log(this.state.arr);
        event.preventDefault();
    }

    handleDrawerOpen = (e)=> {
        this.setState({open:true})
    }

    handleDrawerClose =(e)=>{
        this.setState({open:false})
    }
    render() {
        const {classes} = this.props;

      

        return (
            <div className={classes.root}>
                
                <AppBar className={classNames(classes.appBar, this.state.open  && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerOpen}><MenuIcon/></IconButton>
                        <Typography
                            component="h1"
                            variant = "h6"
                            color = "inherit"
                            noWrap
                        >
                        Xebia Frontend Contest
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                classes={{
                    paper :classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
                }}
                 variant= 'permanent'
                 open={true}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}><ChevronLeftIcon/> </IconButton>
                    </div>
                    <Divider/>
                    
                <List>
                    <ListItem>
                        <NavLink to="/">Resume</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/blogs">Blogs</NavLink>
                    </ListItem>
                   <ListItem>
                   <NavLink to ="/blog/new">Add Blog</NavLink>    
                   </ListItem>
                   <ListItem>
                   <NavLink to ="/blogs/Name_of_the_Blog">Blogs Added</NavLink>    
                   </ListItem>
                </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appbarSpacer}/>
                        <Switch>
                            <Route exact path ="/" ><Resume/></Route>
                            <Route exact path ="/blogs" component={<Bloglist data={this.state.arr} />}> </Route>
                            <Route exact path = "/blog/new"> <AddPost handleHeadLine ={this.handleHeadLine}  handleValue={this.handleValue} handleSubmit={this.handleSubmit} /> </Route>
                            <Route exact path = "/blogs/Name_of_the_Blog"> <Bloglist data={this.state.arr}/></Route>
                        </Switch>
                </main>
                
            </div>
        );
    }
}

export default withStyles(styles)(AdminPortal);