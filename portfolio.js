const { prompt } = require('inquirer')
const { writeFile, fstat } = require('fs')

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
.then( ({ name, location, bio, LinkedIn, github}) => {
   writeFile('Portfolio.html', `
    <!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
    </head>
    <body>
       <h1>Name: </h1>
       <h2>Location: </h2>
       <p>Bio: </p>
       <a href="http://" target="_blank"></a>
       <a href="http://" target="_blank"></a>
    </body>
    </html>
   
   
   `)
})
.catch( err => confirm.log(err))

