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

  // static async createCustomer(customer_NIC, name, date_of_birth, telephone_number, email) {
  //   const { rows } = await db.query(
  //       'INSERT INTO public."Customer" (customer_NIC, name, date_of_birth, telephone_number, email) VALUES ($1, $2, $3, $4, $5) RETURNING *',
  //       [customer_NIC, name, date_of_birth, telephone_number, email]
     
  //   )

  //   const customer = rows[0]
  //   return new Customer(
  //       customer.customer_NIC,
  //       customer.name,
  //       customer.date_of_birth,
  //       customer.telephone_number,
  //       customer.email

  //   )
  // }

  static async createCustomer(customer_NIC, name, date_of_birth, telephone_number, email) {
    const { rows } = await db.query(
      'INSERT INTO defaultdb.Customer (customer_NIC, name, date_of_birth, telephone_number, email) VALUES (?, ?, ?,?,?)',
      [customer_NIC, name, date_of_birth, telephone_number, email]
  
    )
  }

  
  static async getCustomerByNIC(NIC,name) {
    const sqlQuery = 'SELECT * FROM defaultdb.Customer WHERE customer_NIC = ? and name = ?';
    
    try {
      // Log the final SQL query with the parameter value
      const finalQuery = db.format(sqlQuery, [NIC,name]);
      console.log('Final SQL Query:', finalQuery);
  
      const [rows, fields] = await db.execute(sqlQuery, [NIC,name ]);
      console.log(rows)
      console.log(fields)
      const customer = rows ? rows[0] : null;
      console.log(customer)
      return new Customer(
        customer.customer_NIC,
        customer.name,
        customer.date_of_birth,
        customer.telephone_number,
        customer.email
      );
    } catch (error) {
      // Handle the database query error here
      console.error('Error fetching user by NIC and name:', error);
      throw error; // You can rethrow the error or handle it as needed
    }
  }

  
}

export default Customer
