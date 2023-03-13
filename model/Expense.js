const mongoose = require('mongoose');

const Schema = mongoose.Schema

const expenseSchema = new Schema({
    amount: Number,
    group: String,
    date: Date,
    item: String
})



module.exports = mongoose.model("Expense", expenseSchema); 
