import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Dialog, Typography } from "@mui/material"
function createData(Account, Amount,  DueDate, PaymentDate ) {
  return {Account, Amount, DueDate, PaymentDate };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DigitalBankingPopup = (props) => {
  const { onClose, open, name } = props

  const handleClose = () => {
    onClose(name)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      
      <TableContainer component={Paper} sx={{ backgroundColor: 'black', border: '2px solid white' }}>
      <Table sx={{ minWidth: 500 ,color: "#FFCF43", border: '1px solid white'}} >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'white', border: '1px solid white'}}>Account </TableCell>
            <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>Amount</TableCell>
            <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>DueDate&nbsp;</TableCell>
            <TableCell align="right" sx={{ color: 'white' , border: '1px solid white'}}>PaymentDate&nbsp;</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{'&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row" sx={{ color: 'white', border: '1px solid white' }}>
                {row.Account}
              </TableCell>
              <TableCell align="right" sx={{ color: 'white' , border: '1px solid white'}}>{row.Amount}</TableCell>
              <TableCell align="right" sx={{ color: 'white', border: '1px solid white' }}>{row.DueDate}</TableCell>
              <TableCell align="right" sx={{ color: 'white' , border: '1px solid white'}}>{row.PaymentDate}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Dialog>
  )
}

export default DigitalBankingPopup