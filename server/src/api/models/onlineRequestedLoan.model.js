import db from "./db.js"
class OnlineLoan {
    constructor(loan_id,amount, interest_rate,loan_period,approved,request_type,customer_NIC,remaining_installments,branch_code,starting_date, FD_id, description) {
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
        this.FD_id = FD_id
        this.description = description
      
    }

    static async createOnlineLoan(amount,loan_period,request_type,customer_NIC,branch_code, FD_id) {
        const { rows } = await db.query(
          'CALL defaultdb.insertToOnlineRequestedLoan( ?, ?, ?, ?, ?, ?, ? , ?)',
            [amount,loan_period,0,request_type,customer_NIC,branch_code, FD_id, "online requested loan"]
      
        )
        const output_message = rows ? rows[0] : null;
        return output_message;
      }

    

    
            
        
       
    
}



export default OnlineLoan;
