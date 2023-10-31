import Trsnsaction from "../models/transaction.model.js";
const add_transaction = async (req, res) => {
    const sender_account_number = req.body.sender_account_number
    const receiver_account_number = req.body.receiver_account_number
    const transfer_amount = req.body.transfer_amount

    try{
    const transaction = await Trsnsaction.createTransaction(sender_account_number, receiver_account_number, transfer_amount)
    const message = transaction[0]
    const balance = transaction[1]
      console.log(message, balance)

      if (message == "transaction success") {
        console.log("Transaction successful")
        return res.send({ approved: true, balance: balance, message: message })
      }
      else {
        console.log("Transaction failed")
        return res.send({ approved: false })
      }
      
    } catch (err) {
      console.log(err)
      return res.send({ approved: false })
    }
  
    
  }

    const get_transaction_by_account_number = async (req, res) => {
        const account_number = req.body.account_number
    
        try{
        const transaction = await Trsnsaction.getTransactionByAccountNumber(account_number)
          console.log("Transaction fetched")
          return res.send({ transaction: transaction })
        } catch (err) {
          console.log(err)
          return res.send({ approved: false })
        }
      
        //console.log("Get Transaction function")
      }

        const get_transaction_by_date = async (req, res) => {
            const transaction_date = req.body.transaction_date
        
            try{
            const transaction = await Trsnsaction.getTransactionByDate(transaction_date)
            
              console.log("Transaction fetched")
              return res.send({ transaction: transaction })
            } catch (err) {
              console.log(err)
              return res.send({ approved: false })
            }
          
            //console.log("Get Transaction function")
          }

    export default {add_transaction,get_transaction_by_account_number,get_transaction_by_date}
