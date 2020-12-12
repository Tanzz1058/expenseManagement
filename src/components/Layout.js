import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tab from '@material-ui/core/Tab';
import { CssBaseline, Typography, Box, Avatar } from '@material-ui/core';
import {AddBox, Equalizer, PieChart, Menu} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#20c8b8",
    margin: '0',
    color: 'black'
  },
  tab: {
    margin: '10px 0',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    boxSizing:' border-box',
  },
  box: {
      width: '250px',
      height: '100%',
      zIndex: '1'
  },
  avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      margin: '0.5rem auto'
  }
}));

const menuItems = [
{
   icon: <AddBox/>,
   text: 'Add Expense'
},
{
    icon: <Equalizer/>,
    text: 'Statistics'
 },
 {
    icon: <PieChart/>,
    text: 'Graphs'
 },]

const Layout = (props) => {
  const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

   const openToggle = () =>{
       setOpen(true)
   }

   const closeToggle = () =>{
    setOpen(false)
}
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const slider = (
<Box className= {classes.box} onClick = {closeToggle}>
            <Avatar className = {classes.avatar}>
                t
            </Avatar>
            <Divider/>
            <List>
               { menuItems.map((item, key)=>(
                    <ListItem button key = {key}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary = {item.text}/>
                    </ListItem>
               ))}
            </List>
        </Box>
  )

  return (
    <div >
        <CssBaseline/>
      <AppBar position="static" className={classes.root}>
          <Toolbar>
              <IconButton>
                <Menu onClick = {openToggle}/>
              </IconButton>
              <Typography variant = 'h5'>
                Expensify
              </Typography>
          </Toolbar>
        {/* <Tabs className = {classes.tab}
        value={value}
        onChange={handleChange}>
          <Tab label="Item One"  />
          <Tab label="Item Two"  />
          <Tab label="Item Three"  />
        </Tabs> */}
        </AppBar>
        <Drawer open = {open} onClick = {closeToggle}>
            {slider}
        </Drawer>
        <main>
          {props.children}
        </main>
    </div>
  );
}

export default Layout;