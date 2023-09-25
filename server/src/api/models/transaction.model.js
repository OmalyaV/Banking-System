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

    static async createTransaction(sender_account_number,receiver_account_number,transfer_amount,transaction_date,transaction_time) {
        try{
       await db.beginTransaction();
       const sqlQuery1 = 'UPDATE defaultdb.Account SET balance = balance  ? WHERE account_number = ?';
       const sqlQuery2 = 'INSERT INTO defaultdb.Transaction (transaction_id,sender_account_number,receiver_account_number,transfer_amount,transaction_date,transaction_time) VALUES (uuid(), ?, ?, ?, ?,?)';
         const [rows1,fields1] = await db.execute(sqlQuery1, [transfer_amount,sender_account_number]);
            const [rows2,fields2] = await db.execute(sqlQuery1, [transfer_amount,receiver_account_number]);
            const [rows3,fields3] = await db.execute(sqlQuery2, [sender_account_number,receiver_account_number,transfer_amount,transaction_date,transaction_time]);
            await db.commit();
            return rows3;

        }
        
        catch  (error){
            console.log("error in transaction")
            await db.rollback();
            throw error;

        }
        
       
      }

    static async getTransactionByAccountNumber(account_number) {
        const sqlQuery = 'SELECT transaction_id,sender_account_number,receiver_account_number,transfer_amount,transaction_date,transaction_time FROM defaultdb.Transaction WHERE sender_account_number = ? OR receiver_account_number = ?';
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
