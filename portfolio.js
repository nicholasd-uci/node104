const { prompt } = require('inquirer')
const { writeFile } = require('fs')

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
    .then(({ name, location, bio, LinkedIn, github }) => {
        writeFile('Portfolio.html', `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body{
                background-color: cornsilk;
            }
            #welcome{
                text-align: center;
            }
            #box{
                border-style: ridge;
                border-color: blue;
                background-color: aqua;
                margin-top: 125px;
                margin-left: 750px;
                margin-right: 750px;
                padding-left: 25px;
                padding-top: 25px;
                padding-bottom: 50px;
            }
        </style>
    </head>
    <body>
        <div id="welcome">
            <h1>Welcome ${name}, to your portfolio!</h1>
            <h3>Please see your information below</h3>
            <h5><u>Home Town: ${location}</u></h5>
        </div>
        <div id="box">
            <h1>First Name: ${name}</h1>
            <h2>Your Hometown: ${location} </h2>
            <p>Bio: ${bio}</p>
            <ol>
                <a href="https://www.linkedin.com/in/nicholas-dallas-54b5b097/" target="_blank">Your LinkedIn Account</a>
                <a href="https://github.com/nicholasd-uci" target="_blank">Your GitHub Account</a>
            <ol>
        </div>
        <div>
            <p><center> Please Feel free to contact us for customer support</center></p>
            <P><center> 888.111.0000 </center></p>
        </div>
    </body>
    </html>
`, err => {
            if (err) { console.log(err) }
            console.log('Portfolio Page Created!')
        })
    })
    .catch(err => confirm.log(err))

