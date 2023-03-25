const Expense = require('../models/indexModel');

exports.postAddExpense = (req, res, next) => {
    const expenseName = req.body.expenseName;
    const expenseDesc = req.body.expenseDesc;
    const expenseAmount = req.body.expenseAmount;
    Expense.create({
        expenseName: expenseName,
        expenseDesc: expenseDesc,
        expenseAmount: expenseAmount
    }).then((result) => {
        res.json('table created successfully')
    }).catch((err) => {
        console.log(err);
    })
}

exports.getAllexpenses = (req, res, next) => {
    Expense.findAll()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.error(err);
        })
}

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    Expense.findByPk(id)
        .then((user) => {
            user.destroy();
        }).then((result) => {
            res.status(200).json({success:true})
        })
        .catch((err)=>{
            console.error(err);
        })
}