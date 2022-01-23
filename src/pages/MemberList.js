import React , {useState , useEffect} from 'react';
import {Table, Paper, TableHead, TableContainer, TableRow, TableBody , Box} from "@mui/material" ;
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {FaUserPlus , FaTrash} from 'react-icons/fa'
import { makeStyles } from '@mui/styles';
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import axios from "axios" ;
import resources from "./resources";
import "./MemberList.css"

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 1200 ,
    margin: 'auto',
    maxHeight: 500 ,  
    overflowX: 'hidden'
  },
  link: {
    textDecoration: 'none' , 
    width: '100%',
    color: 'black',  
    '&:hover': {
      color: "#c46210"
    }
  },
  trash: {
    color: 'black', 
    '&:hover': {
      color: "#800000"
    }
  }
  
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#c46210",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



 
function MemberList() {
  const classes = useStyles()
  
  const [members , setMembers] = useState([])
  
  useEffect(() => {
    async function fetchValues(){
      const membersRequest = await axios.get("https://fitnessprogym.hasura.app/api/rest/get-customers", {headers: {"x-hasura-admin-secret": resources.password}})
      setMembers(membersRequest.data.customers)
    }

    fetchValues()
  } , [])

  return (
      <div class="main-div">
      <Box className={classes.paper}>
      <TableContainer component={Paper} >
      <Table aria-label="customized table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Age</StyledTableCell>
            <StyledTableCell align="center">Cell No.</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Membership Type</StyledTableCell>
            <StyledTableCell align="center">Fee</StyledTableCell>
            <StyledTableCell align="center">Date of Admission</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {members.map((member) => (
            <StyledTableRow key={member.customer_id}>
              <TableCell align="center">{member.customer_id}</TableCell>
              <TableCell align="center">{member.name}</TableCell>
              <TableCell align="center">{member.age}</TableCell>
              <TableCell align="center">{member.cell_no}</TableCell>
              <TableCell align="center">{member.email}</TableCell>
              <TableCell align="center">{member.address}</TableCell>
              <TableCell align="center">{member.membership_type == 0 ? "Standard" : "Personal Training"}</TableCell>
              <TableCell align="center">{member.membership_type == 0 ? "700/-" : "3000/-"}</TableCell>
              <TableCell align="center">{member.date_of_admission}</TableCell>
              
              <TableCell align="center">
                <FaTrash 
                  className={classes.trash}
                  onClick = {() => {setMembers(members.filter(x => x.customer_id !== member.customer_id))
                                    axios.post("https://fitnessprogym.hasura.app/api/rest/delete-user/" + member.customer_id, 
                                    {} , {headers: {"x-hasura-admin-secret": resources.password}})}
                  }
                 />
              </TableCell>
            
            </StyledTableRow>
          ))}   
          <TableRow className={classes.registerUserCell} >
            <TableCell colspan={9} align="center">
              <Link to="/register_member" className={classes.link}><FaUserPlus /></Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
      </div>
  );
}

export default MemberList;
