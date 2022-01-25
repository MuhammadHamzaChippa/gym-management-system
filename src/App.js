import {Grid, Button} from '@mui/material'
import {FaUserPlus  , FaRegListAlt , FaCashRegister,FaHome  } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import RegisterMember from './pages/RegisterMember'
import MemberList from './pages/MemberList';
import FeeReminder from './pages/FeeReminder';
import Header from './component/Header';

const useStyles = makeStyles(theme => ({
  center: {
    margin: 'auto' ,
    backgroundColor: "white", 
    paddingTop: 3 , 
    paddingBottom: 3, 
     
    width: "40%"  
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
    <Header />
    
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
