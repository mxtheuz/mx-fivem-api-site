const chalk = require("chalk");


module.exports = {
     serverMessage: function(message) {
          console.log(chalk.green("[mx-admin] ") + message)
     },
     errorMessage: function(error) {
          console.log(chalk.red("Error: ") + error)
     },
     databaseMessage: function(message) {
          console.log(chalk.green("Database: ") + message)
     }
}