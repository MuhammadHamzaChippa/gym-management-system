import './App.css';
import {Grid , Button , Box , List , ListItem } from '@mui/material'; 
import {FaUserPlus  , FaRegListAlt , FaCashRegister,FaHome  } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 300 ,
    margin: 'auto' 
  },
  root: {
    width: '100%' , 
    backgroundColor: "black"
  },
  center: {
    margin: 'auto' ,
    backgroundColor: "#c46210", 
    paddingTop: 3 , 
    paddingBottom: 3   
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

function App() {
  const classes = useStyles() ; 
  return (
    <>
    <Grid className={classes.center} container spacing={1}>
     <Grid item xs={3}>   
      <CustomButton  startIcon={<FaHome />} fullWidth>Home</CustomButton>
     </Grid>
     <Grid item xs={3}>   
      <CustomButton  startIcon={<FaUserPlus />} fullWidth>Register Member</CustomButton>
     </Grid>
     <Grid item xs={3}>
      <CustomButton  startIcon={<FaRegListAlt />} fullWidth>Member's List</CustomButton>
     </Grid>
     <Grid item xs={3}>
      <CustomButton  startIcon={<FaCashRegister />} fullWidth>Fee Reminder</CustomButton>
     </Grid>
    </Grid>   

    
    <div className="App">
      <header className="App-header">
        <Box className={classes.paper}>
          <List className={classes.root}>
            <ListItem divider>
              <CustomButton variant="contained" fullWidth startIcon={<FaUserPlus />}>Register Member</CustomButton>
            </ListItem>
            <ListItem divider>
              <CustomButton variant="contained" fullWidth startIcon={<FaRegListAlt />}>Member's List</CustomButton>
            </ListItem>
            <ListItem divider>
              <CustomButton variant="contained" fullWidth startIcon={<FaCashRegister />}>Fee Reminder</CustomButton>
            </ListItem>
          </List>
        </Box>
        
        
        
        
      </header>
    </div>

    </>
  );
}

export default App;
