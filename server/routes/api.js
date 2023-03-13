const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = express.Router()
const expenses = require("/Users/rafeqabufiad/Desktop/home/code/bootcamp/projects/MongooseExpensesProject/model/Expense.js");
router.get("/expenses", (req, res) => {
    res.send(expenses)
});

router.post("/expense", (req, res) => {
    const expose = new Expense({
        item: req.query.item,
        amount: req.query.amount,
        date: req.query.date,
        group: req.query.group
    })
    expose.save().then(createdExpose => {
        res.status(201).json({
            message: "expose added successfully",
            post: {
                ...createdExpose,
                id: createdExpose._id
            }
        });
    });
})

router.put("/update", (req, res) => {
    const expose = new Expense({
        item: req.query.item,
        amount: req.query.amount,
        date: req.query.date,
        group: req.query.group
    })
    expenses.updateOne(
        expose
    ).then(() => { console.log("updated"); })
});

router.get("/expenses/:group", (req, res) => {
    expenses.findById(req.params.group).then(group => {
        if (group) {
            res.status(200).json(group);
        } else {
            res.status(404).json({ message: "group not found!" });
        }
    });
});

module.exports = router

