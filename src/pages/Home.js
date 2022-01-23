import React from 'react';
import { Button , Box , List , ListItem } from '@mui/material'; 
import {FaUserPlus  , FaRegListAlt , FaCashRegister  } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import "./Home.css"

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 300 ,
    margin: 'auto' 
  },
  root: {
    width: '100%' , 
    backgroundColor: "black"
  },
  link: {
    textDecoration: 'none' , 
    width: '100%'
  }, 
  imageBorderd: {
    width: '100%' ,
    borderRadius: '5px' ,  
  }

}))

const CustomButton = styled(Button)`
  color: black ;
  text-transform: none ; 
  background-color: #c46210  ;
  :hover {
    background-color: #c46210; 
    color: white ; 
  } 
`  

function Home(){

    const classes = useStyles() ; 

     return (
      <>
    
      <div className="App-header">
        <Box className={classes.paper}>
          <List className={classes.root}>
            <ListItem divider>
              <img src='https://mdbootstrap.com/img/new/slides/041.webp' className={classes.imageBorderd} alt='...' />
            </ListItem>
            <ListItem divider>
              <Link to="/register_member" className={classes.link}><CustomButton variant="contained" fullWidth startIcon={<FaUserPlus />}>Register Member</CustomButton></Link>
            </ListItem>
            <ListItem divider>
              <Link to="/member_list" className={classes.link}><CustomButton variant="contained" fullWidth startIcon={<FaRegListAlt />}>Member's List</CustomButton></Link>
            </ListItem>
            <ListItem divider>
              <Link to="/fee_reminder" className={classes.link}><CustomButton variant="contained" fullWidth startIcon={<FaCashRegister />}>Fee Reminder</CustomButton></Link>
            </ListItem>
          </List>
        </Box>          
      </div>

      </>
  )
}

export default Home;
