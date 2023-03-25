const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    expenseName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expenseDesc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expenseAmount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
})

module.exports = Expense;