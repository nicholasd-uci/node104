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
       <h1>Name: ${name}</h1>
       <h2>Location: ${location} </h2>
       <p>Bio: ${bio}</p>
       <a href="http://${LinkedIn}" target="_blank"></a>
       <a href="http://${github}" target="_blank"></a>
    </body>
    </html>
   `, err => {
       if (err) { console.log(err) }
       console.log('Portfolio Page Created!')
   })
})
.catch( err => confirm.log(err))

