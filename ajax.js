const inquirer = require('inquirer')
const axios = require('axios')

inquirer.prompt({
    type: 'input',
    name: 'people',
    message: 'Which Star Wars Character are you looking for?'
})
.then(() => {
    axios.get('https://swapi.dev/api/people/?search=r2')
    .then(({ data }) => {
        console.log(data)
    })
    .catch(err => console.log(err))
})
.catch( err => console.log(err))