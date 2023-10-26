import db from "./db.js"
class FixedDeposit {
    constructor(FD_id,saving_account_number,amount,plan_id,starting_date ) {
        this.FD_id = FD_id
        this.saving_account_number = saving_account_number
        this.amount = amount
        this.plan_id = plan_id
        this.starting_date = starting_date
    }

    

    static async getFDByNIC(NIC) {
        const sqlQuery = 'call defaultdb.getFDByNIC(?)';
        try{
            const [rows,fields] = await db.execute(sqlQuery, [NIC, type]);

            const FD = rows? rows.map(row=>({
                saving_account_number: row.saving_account_number,
                amount: row.amount,
                plan_id: row.plan_id,
                starting_date:row.starting_date

            })) : null;
            return FD;
        }
        catch(error){
            console.error('Error fetching user by NIC and type:', error);
            throw error;
        }
    }

    static async getMaxLoanForFD(FD_id) {
        const sqlQuery = 'CALL defaultdb.getMaxLoanForFD(?)';
        try{
            const [rows] = await db.execute(sqlQuery, [FD_id]);

            const loan_amount = rows? rows[0] : null;
            return loan_amount;
            
            }
            
        
        catch(error){
            console.error('Error fetching user by FD_id:', error);
            throw error;
        }
    }
    
}



export default FixedDeposit
