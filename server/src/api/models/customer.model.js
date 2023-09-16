// const db = require("./db") // Import your database configuration
import db from "./db.js"
class Customer {
  constructor(customer_NIC, name, date_of_birth, telephone_number, email) {
    this.customer_NIC = customer_NIC
    this.name = name
    this.date_of_birth = date_of_birth
    this.telephone_number = telephone_number
    this.email = email
    
  }

  static async createCustomer(customer_NIC, name, date_of_birth, telephone_number, email) {
    const { rows } = await db.query(
        'INSERT INTO public."Customer" (customer_NIC, name, date_of_birth, telephone_number, email) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [customer_NIC, name, date_of_birth, telephone_number, email]
     
    )

    const customer = rows[0]
    return new Customer(
        customer.customer_NIC,
        customer.name,
        customer.date_of_birth,
        customer.telephone_number,
        customer.email

    )
  }

  static async getCustomerByNIC(customer_NIC,name) {
    const {rows} = await db.query(
        'SELECT * FROM defaultdb.Customer WHERE customer_NIC = ? AND name = ?',
        [customer_NIC,name]

    )
    const customer = rows[0]
    return new Customer(
        customer.customer_NIC,
        customer.name,
        customer.date_of_birth,
        customer.telephone_number,
        customer.email
    )
  }
}

export default Customer
