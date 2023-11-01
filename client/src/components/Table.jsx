import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { Typography, TextField, InputBase, Grid, Button } from "@mui/material"
const rows = [
    createData('wewreee', 159, 6.0, 24),
    createData('wetyr', 237, 9.0, 37),
    createData('asdfdh', 262, 16.0, 24),
    createData('rfgbc', 305, 3.7, 67),
    createData('drewrtgh', 356, 16.0, 49),
  ];
  function createData(Date,FromAccount, ToAccount,  Amount ) {
    return {Date,FromAccount, ToAccount,  Amount };
    }
const TableComponent=()=> {
return(
    <TableContainer component={Paper} sx={{ backgroundColor: 'black', border: '2px solid white', padding: '10px' }}>
      <Box textAlign="left" sx={{ padding: "20px 100px", textAlign: "center", padding: '10px' }}>
          {/* Left Side */}
          <Typography
            sx={{
              color: "#FFCF43",
              fontSize: 24,
              fontWeight: 700,
              padding: "0px 0px",
            }}
          >
            Transaction History
          </Typography>
      </Box>
      
      <Table sx={{ minWidth: 300 ,color: "#FFCF43", border: '1px solid white', padding: '10px'}} >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'white', border: '1px solid white'}}>Date </TableCell>
            <TableCell align="right" sx={{ color: 'white', border: '1px solid white', padding: '10px' }}>FromAccount</TableCell>
            <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>ToAccount&nbsp;</TableCell>
            <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>Amount&nbsp;</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              
            >
              <TableCell component="th" scope="row" sx={{ color: 'white', border: '1px solid white', padding: '10px 20px' }}>
                {row.Date}
              </TableCell>
              <TableCell align="right" sx={{ color: 'white' , border: '1px solid white'}}>{row.FromAccount}</TableCell>
              <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>{row.ToAccount}</TableCell>
              <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>{row.Amount}</TableCell>
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
)
    }

export default TableComponent