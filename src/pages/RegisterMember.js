import React , {useState} from 'react';
import './RegisterMember.css'
import {Box, Button, TextField, List, ListItem , Grid , MenuItem} from '@mui/material'
import { styled } from "@mui/material/styles";


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
  const [memberShip, setMemberShip] = useState('Standard (Rs 700)');

  const handleChange = (event) => {
    setMemberShip(event.target.value);
  };


  return (
    <div class = "main">
      <Box >
      <List  >
        <ListItem >
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={4}>
              <TextField
                required
                id="name"
                placeholder='Name *'
                fullWidth 
                variant="outlined"
                InputProps={{style: {backgroundColor: 'white'}}}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                required
                id="age"
                placeholder="Age *"
                fullWidth
                type="number"
                InputProps={{style: {backgroundColor: 'white'}}}  
              />
            </Grid>
          </Grid>
        </ListItem>

        <ListItem >
          <Grid container spacing={1} justifyContent="center">    
            <Grid item xs={2}>
              <TextField
                id="email"
                placeholder="Email"
                fullWidth
                InputProps={{style: {backgroundColor: 'white'}}} 
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                required
                id="cell-no"
                placeholder="Cell No *"
                fullWidth
                InputProps={{style: {backgroundColor: 'white'}}} 
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                required
                id="address"
                placeholder="Address *"
                fullWidth
                InputProps={{style: {backgroundColor: 'white'}}} 
              />
            </Grid>
          </Grid>
        </ListItem>

        <ListItem >
          <Grid container spacing={1} justifyContent="center">    
            <Grid item xs={4}>
              <TextField
                select
                id="membership"
                value={memberShip}
                InputProps={{style: {backgroundColor: 'white' ,}}}
                onChange={handleChange}
                fullWidth 
              >
                {memberships.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <CustomButton variant="contained" fullWidth sx={{height: '100%'}}>Register</CustomButton>
            </Grid>
          </Grid>
        </ListItem>

      </List>
      </Box>
    </div>
  ) 
  
}

export default RegisterMember;
