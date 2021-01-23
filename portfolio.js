const { prompt } = require('inquirer')

prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Please write a short bio'
    },
    {
        type: 'input',
        name: 'LinkedIn',
        message: 'Enter your LinkedIn URL'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub URL'
    }
])
.then( res => {
    console.log(res)
})
.catch( err => confirm.log(err))