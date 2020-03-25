const chalk = require('random-chalk')
const copains = ['Anthony', 'Lucas', 'Romain', 'Clément']

console.log(copains)
copains.forEach(function(nom){
    console.log(chalk.random(nom))
})