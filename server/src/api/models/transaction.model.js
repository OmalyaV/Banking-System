import db from "./db.js"
class Trsnsaction {
    constructor(transaction_id,sender_account_number,receiver_account_number,transfer_amount,transaction_date,transaction_time) {
        this.transaction_id = transaction_id
        this.sender_account_number = sender_account_number
        this.receiver_account_number = receiver_account_number
        this.transfer_amount = transfer_amount
        this.transaction_date_time = transaction_date
        this.transaction_time = transaction_time
      
    }

    static async createTransaction(sender_account_number,receiver_account_number,transfer_amount) {
        sqlQuery = 'CALL defaultdb.doTransaction(?,?,?)';
        
            const [rows,fields] = await db.execute(sqlQuery, [sender_account_number,receiver_account_number,transfer_amount]);
            const output_message = rows ? rows[0] : null;
            console.log(output_message)
            return output_message;
            
        
       
      }

    static async getTransactionByAccountNumber(account_number) {
        const sqlQuery = 'SELECT transaction_id,sender_account_number,receiver_account_number,transfer_amount,transaction_date,transaction_time FROM defaultdb.transaction WHERE sender_account_number = ? OR receiver_account_number = ?';
        try{
            const [rows,fields] = await db.execute(sqlQuery, [account_number,account_number]);

            const transaction = rows? rows.map(row=>({
                transaction_id: row.transaction_id,
                sender_account_number: row.sender_account_number,
                receiver_account_number: row.receiver_account_number,
                transfer_amount: row.transfer_amount,
                transaction_date: row.transaction_date,
                transaction_time: row.transaction_time
            })) : null;
            return transaction;
        }
        catch(error){
            console.error('Error fetching user by account_number :', error);
            throw error;
        }
    }

    static async getTransactionByDate(transaction_date) {
        const sqlQuery = 'SELECT transaction_id,sender_account_number,receiver_account_number,transfer_amount,transaction_date,transaction_time FROM defaultdb.Transaction WHERE transaction_date = ?';
        try{
            const [rows,fields] = await db.execute(sqlQuery, [transaction_date]);

            const transaction = rows? rows.map(row=>({
                transaction_id: row.transaction_id,
                sender_account_number: row.sender_account_number,
                receiver_account_number: row.receiver_account_number,
                transfer_amount: row.transfer_amount,
                transaction_date: row.transaction_date,
                transaction_time: row.transaction_time
            })) : null;
            return transaction;
        }
        catch(error){
            console.error('Error fetching user by transaction_date :', error);
            throw error;
        }
    }

    
}

export default Trsnsaction
