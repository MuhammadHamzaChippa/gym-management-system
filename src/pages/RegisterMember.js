import React , {useState} from 'react';
import './RegisterMember.css'
import {FormLabel, Button, TextField, Grid , MenuItem ,Snackbar , Alert} from '@mui/material'
import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';
import moment from "moment";
import axios from 'axios';
import resources from "./resources";

const useStyles = makeStyles(theme => ({ 
  form: {
    color: "white" , 
    marginLeft: 4
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

const memberships = ['Standard (Rs 700)' , 'Personal Training (Rs 3000)']
function RegisterMember() {

  const classes = useStyles()

  const [name, setName] = useState('')
  const [age , setAge] = useState()
  const [email , setEmail] = useState('')
  const [address , setAddress] = useState('')
  const [phone , setPhone] = useState('')
  const [membership, setMembership] = useState('Standard (Rs 700)');
  const [date , setDate] = useState(moment(new Date()).format("YYYY-MM-DD"))

  const [alert , setAlert] = useState(false)
  const [status , setStatus] = useState('')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  }; 
 
  const registerCusomter = () => {
    if (name && age && address && phone && membership && date) {
    const URL = ('https://fitnessprogym.hasura.app/api/rest/register-user/' + address + "/" + age + "/" + phone + "/" + 
    Math.floor(Math.random() * 10000) + "/" + email + "/" + ((membership == 'Standard (Rs 700)') ? 700 : 3000) + "/" + 
    ((membership == 'Standard (Rs 700)') ? 0 : 1 ) + "/" + name)
    const request = axios.post(URL, 
    {} , {headers: {"x-hasura-admin-secret": resources.password}})
    setName('')
    setAge('')
    setEmail('')
    setAddress('')
    setPhone('')
    setMembership('Standard (Rs 700)')
    setAlert(true)
    setStatus(true)
    }
    else {
      setAlert(true)
      setStatus(false)
    } 
  }

  return (
    <div class = "main">
      <Snackbar open={alert} autoHideDuration={3000} onClose={handleClose}>
        {status ?
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Customer Registered Successfully
        </Alert> : 
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Incomplete Information
        </Alert> 
        }
        
      </Snackbar>
      
      <div class="form">
        <Grid container spacing={1} justifyContent="center" >
          <Grid item xs={4}>
            {/* <FormLabel className={classes.form}>Name</FormLabel> */}
            <TextField
              required
              id="name"
              value={name}
              placeholder='Name *'
              fullWidth
              onChange={(e) => (setName(e.target.value))} 
              variant="outlined"
              InputProps={{style: {backgroundColor: 'white'}}}
            />
          </Grid>
          <Grid item xs={4}>
            {/* <FormLabel className={classes.form}>Age</FormLabel> */}
            <TextField
              required
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age *"
              fullWidth
              type="number"
              InputProps={{style: {backgroundColor: 'white'}}}  
            />
          </Grid>
          <Grid item xs={4}>
            {/* <FormLabel className={classes.form}>Email</FormLabel> */}
            <TextField
              id="email"
              value = {email}
              onChange= {(e) => setEmail(e.target.value)}
              placeholder="Email"
              fullWidth
              InputProps={{style: {backgroundColor: 'white'}}} 
            />
          </Grid>
              
            <Grid item xs={4}>
              <TextField
                required
                id="address"
                value = {address}
                onChange= {(e) => setAddress(e.target.value)}
                placeholder="Address *"
                fullWidth
                InputProps={{style: {backgroundColor: 'white'}}} 
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                id="cell-no"
                value = {phone}
                onChange= {(e) => setPhone(e.target.value)}
                placeholder="Cell No *"
                fullWidth
                InputProps={{style: {backgroundColor: 'white'}}} 
              />
            </Grid>
             
            <Grid item xs={4}>
              <TextField
                select
                id="membership"
                value={membership}
                InputProps={{style: {backgroundColor: 'white' ,}}}
                onChange={(e) => setMembership(e.target.value)}
                fullWidth 
              >
                {memberships.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
             <TextField
                type="date"
                id="date-of-admission"
                value={date}
                InputProps={{style: {backgroundColor: 'white' ,}}}
                onChange={(e) => setDate(e.target.value)}
                fullWidth 
              ></TextField>
            </Grid>
            <Grid item xs={4}>
              <CustomButton 
                variant="contained" 
                fullWidth sx={{height: '100%'}}
                onClick = {registerCusomter} 
                >
                  Upload Image
              </CustomButton>
            </Grid>
            <Grid item xs={4}>
              <CustomButton 
                variant="contained" 
                fullWidth sx={{height: '100%'}}
                onClick = {registerCusomter} 
                >
                  Register
              </CustomButton>
            </Grid>
          </Grid>
      </div>
    </div>
  ) 
  
}

export default RegisterMember;
