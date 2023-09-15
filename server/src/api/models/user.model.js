// const db = require("./db") // Import your database configuration
import db from "./db.js"
class User {
  constructor(customer_NIC, username, password_hash) {
    this.customer_NIC = customer_NIC
    this.username = username
    this.password_hash = password_hash
    
  }

  static async createUser(customer_NIC, username, password_hash) {
    const { rows } = await db.query(
      'INSERT INTO public."User" (customer_NIC, username, password_hash) VALUES ($1, $2, $3) RETURNING *',
      [customer_NIC, username, password_hash]
  
    )

    const user = rows[0]
    return new User(
      user.customer_NIC,
      user.username,
      user.password_hash
    )
  }

  static async getUserByusername(username) {
    const {rows} = await db.query(
      'SELECT password_hash FROM public."User" WHERE username = $1',
      [username]

    )
    const password_hash = rows[0]
    return new password_hash(
      password_hash.password_hash
    )
  }
}

export default User
