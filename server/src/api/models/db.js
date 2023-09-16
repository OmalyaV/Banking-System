import mysql from "mysql2";
import dotenv from "dotenv"

//const { Pool } = mysql.
dotenv.config()

const db = mysql.createPool({
  user: 'doadmin',
  password: 'AVNS_gJJ2cWco9i3zs_QHmbc',
  host: 'db-mysql-nyc1-58007-do-user-14522602-0.b.db.ondigitalocean.com',
  database: 'defaultdb',
  port: 25060,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  
})

async function executeExampleQuery() {
  let connection;
  try {
    // Get a connection from the pool
    connection = await db.getConnection();

    // Define your SQL query
    const sql = "SELECT * FROM Customer";

    // Execute the query
    const [rows, fields] = await connection.execute(sql);

    // Log the results
    console.log("Example Query Results:", rows);
  } catch (error) {
    console.error("Error executing example query:", error);
  } finally {
    // Always release the connection back to the pool
    if (connection) {
      connection.release();
    }
  }
}

// Call the example query function
executeExampleQuery();


export default db
