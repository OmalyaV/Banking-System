import {
  comparePassword,
  generateHash,
  is_Customer,
} from "../services/user.service.js"
import User from "../models/user.model.js"
import Customer from "../models/customer.model.js"

const login = async (req, res) => {
  const NIC = req.body.NIC
  const password = req.body.password

  try {
    const user = await User.getUserByUsername(NIC)
    const hash = user.password_hash
    console.log(hash)
    if (hash === null) {
      console.log("User not found")
      return res.send({ approved: false })
    }
     const password_hash = hash
    const match = await comparePassword(password, hash)
    console.log(NIC, password, hash)
    if (match) {
      console.log("Login successful")
      return res.send({ approved: true ,user_type: user.user_type, customer_NIC: user.customer_NIC, username: user.username })
    } else {
      console.log("Login failed")
      return res.send({ approved: false })
    }
  } catch (err) {
    console.log(err)
    return res.send({ approved: false })
  }
}
 
const register = async (req, res) => {
  const NIC = req.body.NIC
  const username = req.body.username
  const password = req.body.password
  const user_type = req.body.user_type
  
  const hash = await generateHash(password)
  try {
    const user = await User.createUser(username, hash,NIC ,user_type)
    console.log("User created")
  } catch (err) {
    console.log(err)
    return res.send({ approved: false })
  }

  console.log("Registration function")
}


const check_eligibility = async (req, res) => {
  const NIC = req.body.NIC
  const name = req.body.name

  try {

    const customer = await Customer.getCustomerByNIC(NIC,name)
    
    if (customer) {
      console.log("Customer found")
      return res.send({ approved: true })
    } else {
      console.log("Customer not found")
      return res.send({ approved: false })
    }
  } catch (err) {
    console.log(err)
    return res.send({ approved: false })
  }
}

export default { login, register , check_eligibility}
