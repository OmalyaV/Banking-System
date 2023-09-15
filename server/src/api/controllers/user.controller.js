import {
  comparePassword,
  generateHash,
  is_Customer,
} from "../services/user.service.js"
import User from "../models/user.model.js"
import Customer from "../models/customer.model.js"

const login = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  try {
    const user = await User.getUserByUsername(username)

    if (user === null) {
      console.log("User not found")
      return res.send({ approved: false })
    }
    const hash = user.hash
    const match = await comparePassword(password, hash)
    console.log(username, password, hash)
    if (match) {
      console.log("Login successful")
      return res.send({ approved: true })
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

  try {
    const hash = await generateHash(password)
    const user = await User.createUser(NIC, username, hash)
    console.log("User created")
    return res.send({ approved: true })
  } catch (err) {
    console.log(err)
    return res.send({ approved: false })
  }
  console.log("Register function")
} 

const check_eligibility = async (req, res) => {
  const NIC = req.body.NIC
  const name = req.body.name

  try {
    const is_Customer = await is_Customer(NIC, name)
    if (is_Customer) {
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

export default { login, register }
