import db from "./db.js"
class Account {
    constructor(account_number, type,customer_NIC, branch_code, balance) {
        this.account_number = account_number
        this.type = type
        this.customer_NIC = customer_NIC
        this.branch_code = branch_code
        this.balance = balance
      
    }

    static async createAccount(account_number, type,customer_NIC, branch_code, balance) {
        const { rows } = await db.query(
          'INSERT INTO defaultdb.Account (account_number, type,customer_NIC, branch_code, balance) VALUES (?, ?, ?,?,?)',
          [account_number, type,customer_NIC, branch_code, balance]
      
        )
      }

    static async getAccountsByNICAndType(NIC, type) {
        const sqlQuery = 'SELECT account_number, balance FROM defaultdb.Account WHERE customer_NIC = ? and type = ?';
        try{
            const [rows] = await db.execute(sqlQuery, [NIC, type]);

            const account = rows? rows.map(row=>({
                account_number: row.account_number,
                balance: row.balance
            })) : null;
            return account;
        }
        catch(error){
            console.error('Error fetching user by NIC and type:', error);
            throw error;
        }
    }

    static async getAccountByAccountNumber(account_number) {
        const sqlQuery = 'SELECT * FROM defaultdb.Account WHERE account_number = ?';
        try{
            const [rows] = await db.execute(sqlQuery, [account_number]);

            const account = rows? rows[0] : null;
            return account;
            
            }
            
        
        catch(error){
            console.error('Error fetching user by account number:', error);
            throw error;
        }
    }
    
}

export default Account
