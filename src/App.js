import './App.css';
import {Grid, Button} from '@mui/material'
import {FaUserPlus  , FaRegListAlt , FaCashRegister,FaHome  } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import RegisterMember from './pages/RegisterMember'
import MemberList from './pages/MemberList';
import FeeReminder from './pages/FeeReminder';

const useStyles = makeStyles(theme => ({
  center: {
    margin: 'auto' ,
    backgroundColor: "#c46210", 
    paddingTop: 3 , 
    paddingBottom: 3   
  } , 
  link: {
    textDecoration: 'none'
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
  const classes = useStyles()
  return (
    <>
    <Grid className={classes.center} container spacing={1}>
      <Grid item xs={3}>   
        <Link to="/" className={classes.link}><CustomButton  startIcon={<FaHome />} fullWidth>Home</CustomButton></Link>
     </Grid>
     <Grid item xs={3}>   
        <Link to="/register_member" className={classes.link}><CustomButton  startIcon={<FaUserPlus />} fullWidth>Register Member</CustomButton></Link>
     </Grid>
     <Grid item xs={3}>
        <Link to="/member_list" className={classes.link}><CustomButton  startIcon={<FaRegListAlt />} fullWidth>Member's List</CustomButton></Link>
     </Grid>
     <Grid item xs={3}>
        <Link to="/fee_reminder" className={classes.link}><CustomButton  startIcon={<FaCashRegister />} fullWidth>Fee Reminder</CustomButton></Link>
     </Grid>
    </Grid>   
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register_member" element={<RegisterMember />} />
        <Route path="member_list" element={<MemberList />} />
        <Route path="fee_reminder" element={<FeeReminder />} />
      </Routes>

    </>
  );
}

export default App;
