import Customer from "../models/customer.model.js";
const add_customer = async (req, res) => {
    const NIC = req.body.NIC
    const name = req.body.name
    const date_of_birth = req.body.date_of_birth
    const telephone_number = req.body.telephone_number
    const email = req.body.email

    
    try{
    const user = await Customer.createCustomer(NIC, name, date_of_birth, telephone_number, email)
      console.log("Customer created")
    } catch (err) {
      console.log(err)
      return res.send({ approved: false })
    }
  
    console.log("Add Customer function")
  }
  export default {add_customer}