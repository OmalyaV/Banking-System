import db from "./db.js"
class Loan {
    constructor(loan_id,amount, interest_rate,loan_period,approved,request_type,customer_NIC,remaining_installments,branch_code,starting_date) {
        this.loan_id = loan_id
        this.amount = amount
        this.interest_rate = interest_rate
        this.loan_period = loan_period
        this.approved = approved
        this.request_type = request_type
        this.customer_NIC = customer_NIC
        this.remaining_installments = remaining_installments
        this.branch_code = branch_code
        this.starting_date = starting_date
      
    }

    static async createLoan(amount, interest_rate,loan_period,approved,request_type,customer_NIC,branch_code) {
        const { rows } = await db.query(
          'CALL defaultdb.insertToLoan( ?, ?, ?, ?, ?, ?, ?)',
            [amount, interest_rate,loan_period,approved,request_type,customer_NIC,branch_code]
      
        )
        const output_message = rows ? rows[0] : null;
        return output_message;
      }

    static async getAccountsByNICAndType(NIC, type) {
        const sqlQuery = 'SELECT account_number, balance FROM defaultdb.Account WHERE customer_NIC = ? and type = ?';
        try{
            const [rows,fields] = await db.execute(sqlQuery, [NIC, type]);

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
    
    static async updateBalance(account_number, balance) {
        const sqlQuery = 'call defaultdb.updateBalance(?,?)';
        try{
            const [rows] = await db.execute(sqlQuery, [account_number,balance]);

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
