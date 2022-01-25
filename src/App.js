import React , {useState } from 'react';
import {Button, TextField} from '@mui/material'
import { useAuth , logout, login } from './firebase';
import { styled } from "@mui/material/styles";
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import RegisterMember from './pages/RegisterMember'
import MemberList from './pages/MemberList';
import FeeReminder from './pages/FeeReminder';
import Header from "./component/Header"


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
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [loading , setLoading] = useState(false)

  const currentUser = useAuth()

  async function handleLogin(){
    setLoading(true); 
    try {
      await login(email , password) ;
    }
    catch(error) {
      alert("Error logging in") ;
      console.log(error) ;
    }
    setLoading(false); 
  }
  return (
    <>
    {currentUser?.email ? 
    <div>
      <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register_member" element={<RegisterMember />} />
        <Route path="member_list" element={<MemberList />} />
        <Route path="fee_reminder" element={<FeeReminder />} />
    </Routes>
    </div>
 : <div id = "login-form">
    <TextField
      id = "email"
      placeholder ="Email"
      onChange={(e) => (setEmail(e.target.value))} 
    />
    <TextField
      id = "password"
      type="password"
      placeholder="Password"
      onChange={(e) => (setPassword(e.target.value))}
    />
        

    <CustomButton variant="contained" sx={{height: '100%'}} onClick={handleLogin}>
        Log In
    </CustomButton>
    </div>}
    
    
    </>
  );
}

export default App;
