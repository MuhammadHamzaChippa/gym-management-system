import React from 'react';
import {Table, Paper, TableHead, TableContainer, TableRow, TableBody , Box} from "@mui/material" ;
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { makeStyles } from '@mui/styles';
import { styled } from "@mui/material/styles";
import "./MemberList.css"


const useStyles = makeStyles(theme => ({
  paper: {
    minWidth: 1000 ,
    margin: 'auto',  
  },
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
  const classes = useStyles();
  return (
      <div class="main-div">
      <Box className={classes.paper}>
      <TableContainer component={Paper} >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Cell No.</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Membership Type</StyledTableCell>
            <StyledTableCell align="right">Fee</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
      </div>
  );
}

export default MemberList;
