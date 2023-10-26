import db from "./db.js"
class Installment {
    constructor(Installment_id,loan_id,paid,due_date) {
        this.Installment_id = Installment_id
        this.loan_id = loan_id
        this.paid = paid
        this.due_date = due_date
      
    }

    
    

    static async getLateInstallmentsByBranch(branch_code) {
        const sqlQuery = 'call defaultdb.branchWiseLateInstallments(?)';
        try{
            const [rows] = await db.execute(sqlQuery, [branch_code]);
            const installment = rows? rows.map(
                row=>({
                Installment_id: row.Installment_id,
                loan_id: row.loan_id,
                paid: row.paid,
                due_date: row.due_date

            }))
             : null;
            return installment;
            
            }
            
        
        catch(error){
            console.error('error whicle fetching data', error);
            throw error;
        }
    }

    static async getMyInstallments(customer_NIC) {
        const sqlQuery = 'call defaultdb.getCustomerInstallments(?)';
        try{
            const [rows] = await db.execute(sqlQuery, [customer_NIC]);
            const installment = rows? rows.map(
                row=>({
                Installment_id: row.Installment_id,
                loan_id: row.loan_id,
                paid: row.paid,
                due_date: row.due_date,
                monthly_installment: row.monthly_installment

            }))
             : null;
            return installment;
            
            }
            
        
        catch(error){
            console.error('error whicle fetching data', error);
            throw error;
        }
    }

    
    
}



export default Installment;
