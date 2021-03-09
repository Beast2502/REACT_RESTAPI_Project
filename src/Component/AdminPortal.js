import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles'
import AddPost from './AddPost';
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
            open: false
        }
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
                        Admin
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
                    <ListItem>News</ListItem>
                </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appbarSpacer}/>
                        Post News Details
                        <AddPost/>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(AdminPortal);