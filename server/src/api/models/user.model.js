// const db = require("./db") // Import your database configuration
import db from "./db.js"
class User {
  constructor(customer_NIC, username, password_hash) {
    this.customer_NIC = customer_NIC
    this.username = username
    this.password_hash = password_hash
    
  }

  static async createUser(username, password_hash,customer_NIC) {
    const { rows } = await db.query(
      'INSERT INTO defaultdb.User (user_NIC, username, password_hash) VALUES (?, ?, ?)',
      [customer_NIC, username, password_hash]
  
    )

    
  }

  static async getUserByUsername(NIC) {
    const sqlQuery = 'SELECT password_hash FROM defaultdb.User WHERE user_NIC = ?';
    
    try {
      // Log the final SQL query with the parameter value
      const finalQuery = db.format(sqlQuery, [NIC]);
      console.log('Final SQL Query:', finalQuery);
  
      const [rows, fields] = await db.execute(sqlQuery, [NIC ]);
      console.log(rows)
      console.log(fields)
      const password_hash = rows ? rows[0] : null;
      console.log(password_hash)
      return password_hash.password_hash.toString();
    } catch (error) {
      // Handle the database query error here
      console.error('Error fetching user by NIC:', error);
      throw error; // You can rethrow the error or handle it as needed
    }
  }
  
}

export default User