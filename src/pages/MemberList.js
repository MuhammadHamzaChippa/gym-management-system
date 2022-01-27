import React , {useState , useEffect} from 'react';
import {Table, Paper, TableHead, TableContainer, TableRow, TableBody , TextField} from "@mui/material" ;
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
    maxWidth: "98%" ,
    minWidth: "80%" ,
    margin: 'auto',
    maxHeight: "70vh" ,  
    
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
  },
  imageBorderd: {
    width: '100%' ,
    borderRadius: '5px' ,   
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
  
  const [memberSearch , setMemberSearch] = useState("") ;
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

      <TableContainer component={Paper} className={classes.paper}>
      <Table aria-label="customized table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Picture</StyledTableCell>
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
          <StyledTableRow>
            <TableCell align="left" colSpan={11}>
              <TextField
                required
                id="name"
                value={memberSearch}
                placeholder='Search Customer'
                fullWidth
                onChange={(e) => (setMemberSearch(e.target.value))} 
                variant="outlined"
                InputProps={{style: {backgroundColor: 'white'}}}
              /></TableCell>
          </StyledTableRow>
          
          {members.filter(member => member.name.includes(memberSearch)).map((member) => (
              <StyledTableRow key={member.id}>
              <TableCell align="center">{member.id}</TableCell>
              <TableCell align="center"><img src={member.image_url}  className={classes.imageBorderd} alt='...' /></TableCell>
              <TableCell align="center">{member.name}</TableCell>
              <TableCell align="center">{member.age}</TableCell>
              <TableCell align="center">{member.cell_no}</TableCell>
              <TableCell align="center">{member.email}</TableCell>
              <TableCell align="center">{member.address}</TableCell>
              <TableCell align="center">{member.membership_type == 0 ? "Standard" : "Personal Training"}</TableCell>
              <TableCell align="center">{member.membership_type == 0 ? "700/-" : "3000/-"}</TableCell>
              <TableCell align="center">{member.admission_date}</TableCell>
              
              <TableCell align="center">
                <FaTrash 
                  className={classes.trash}
                  onClick = {() => {setMembers(members.filter(x => x.id !== member.id))
                                    axios.post("https://fitnessprogym.hasura.app/api/rest/delete-user/" + member.id, 
                                    {} , {headers: {"x-hasura-admin-secret": resources.password}})}
                  }
                 />
              </TableCell>
            
            </StyledTableRow>
            
          ))}   
          <TableRow className={classes.registerUserCell} >
            <TableCell colSpan={11} align="center">
              <Link to="/register_member" className={classes.link}><FaUserPlus /></Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Table>
      <TableHead>
        
      </TableHead>
    </Table>
    </div>
  );
}

export default MemberList;
