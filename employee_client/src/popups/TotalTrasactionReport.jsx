import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Dialog, Typography } from "@mui/material"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../apiConfig";





const TotalTransactionReportPopup = (props) => {
  const { user, username,userType, login, logout } = useContext(AuthContext)
  const [branchCode, setBranchCode] = React.useState("")
  const [list, setList] = React.useState([])
  const { onClose, open } = props

  React.useEffect(() => {
    console.log(user)
    const data = {
      NIC: user
    }
    api
      .post("/employee/get_employee_branch_code", data)
      .then((response) => {
        if (response.data.approved){
          setBranchCode(response.data.branch_code)
          handleList()
          console.log("branch code fetched!")
        }
        else{
          console.log("something went wrong!", response.data) }})
      .catch((error) => {
        console.error("Branch code fetching failed:", error)
      })
  } , [])

  const handleList = () => {
    const data = {
      branch_code: branchCode
    }
    api
      .post("/transaction/branch_transactions", data)
      .then((response) => {
        if (response.data.approved){
          setList(response.data.transaction)
          console.log("list fetched!")
        }
        else{
          console.log("something went wrong!", response.data) }})
      .catch((error) => {
        console.error("list fetching failed:", error)
      })
  }

  const handleClose = () => {
    onClose(true)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>From Account</TableCell>
        <TableCell>To Account</TableCell>
        <TableCell>transfer amount</TableCell>
        <TableCell>Transfer Date</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
    
      {list.map((item, index) => (
        
        <TableRow key={index} >
          <TableCell>{item.sender_account_number}</TableCell>
          <TableCell>{item.receiver_account_number}</TableCell>
          <TableCell>{item.transfer_amount}</TableCell>
          <TableCell>{item.transfer_date}</TableCell>
        </TableRow>
        
      ))}
      
    </TableBody>
  </Table>
</TableContainer>
    </Dialog>
  )
}

export default TotalTransactionReportPopup