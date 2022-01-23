import React , {useState , useEffect} from 'react';
import {Table, Paper, TableHead, TableContainer, TableRow, TableBody} from "@mui/material" ;
import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import resources from './resources';
import moment from "moment";
import axios from 'axios';
import './FeeReminder.css'

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 1200 ,
    margin: 'auto',
    maxHeight: 400 ,  
  },}))

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


function FeeReminder() {
  const classes = useStyles()
  const [members , setMembers] = useState([])
  
  useEffect(() => {
    async function fetchValues(){
      const membersRequest = await axios.get("https://fitnessprogym.hasura.app/api/rest/get-customers", {headers: {"x-hasura-admin-secret": resources.password}})
      setMembers(membersRequest.data.customers)
    }

    fetchValues()
  } , [])

  const todayDate = moment(new Date()).format("YYYY-MM-DD")
  const year = todayDate.slice(0,4)
  const month = todayDate.slice(5,7)
  const day = todayDate.slice(8)

  const filteredMembers = members.filter(member => {
    let admissionDate = member.date_of_admission
    let admissionDay = admissionDate.slice(8)
    if(admissionDay === day && admissionDate !== todayDate){
      return member
    }
  })
  
  console.log("Members" , members)
  console.log("Filtered Members" , filteredMembers)

  return (
    <div class = "main-div">
      <TableContainer component={Paper} className={classes.paper}>
        <Table aria-label="customized table" stickyHeader>
          <TableHead>
            <TableRow>
              {filteredMembers.len > 0 ?
              <> 
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Date of Admission</StyledTableCell>
              <StyledTableCell align="center">Due Date</StyledTableCell>
              </>  
              :
              <StyledTableCell align="center" colSpan={4}>No Fee Reminder</StyledTableCell>  
              }
            </TableRow>
            
             {filteredMembers.map((member) => (
              <StyledTableRow key={member.customer_id}>
              <TableCell align="center">{member.customer_id}</TableCell>
              <TableCell align="center">{member.name}</TableCell>
              <TableCell align="center">{member.date_of_admission}</TableCell>
              <TableCell align="center">{member.date_of_admission.slice(0,4)}-{month}-{member.date_of_admission.slice(8)}</TableCell>
            </StyledTableRow>
          ))}

          </TableHead>
        </Table>
      </TableContainer>
    </div>
  )
}

export default FeeReminder;
