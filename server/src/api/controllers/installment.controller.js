import Loan from "../models/loan.model.js";

const add_loan = async (req, res) => {
    const amount = req.body.amount
    const interest_rate = req.body.interest_rate
    const loan_period = req.body.loan_period
    const approved = req.body.approved
    const request_type = req.body.request_type
    const customer_NIC = req.body.customer_NIC
    const branch_code = req.body.branch_code

    
    try{
    const loan = await Loan.createLoan(amount, interest_rate,loan_period,approved,request_type,customer_NIC,branch_code)
      console.log("Loan created")
        return res.send({ approved: true }, { loan: loan })
    } catch (err) {
      console.log(err)
      return res.send({ approved: false })
    }
  
    // console.log("Add Account function")
  
}



const my_loan_list = async (req, res) => {
    const NIC = req.body.NIC
    
    try{
    const loan = await Loan.getLoanByCustomerNIC(NIC)
        console.log("Loan list fetched")
        console.log(loan)
        return res.send({ loan: loan })
    
    } catch (err) {
        console.log(err)
        return res.send({ approved: false })
    }
    finally{
        console.log("get loan list function")
    }

   // console.log("Get Account list function")
}


export default {add_loan, my_loan_list}


 