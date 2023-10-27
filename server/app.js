const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended : false}));
dotenv.config();
//HOW IS FRONT END ABLE TO SCIRPT JS ABLE TO SEE APP JS
//nodemon app.js
//CANT MAKE REQ FROM LOCATIONS.HTML

const DbService = require('./dbService');

app.get('/getAll', (req, res) => {
    console.log('TEST: running -> getAll route [get]');
    let dbService = new DbService();
    let showResults = dbService.connectionTest(
        `
        SELECT * FROM names
        `
    )
    showResults.then((response) => {
        console.log("getAll route (GET) result: " + response.result); 
    }) 
    return res.json({
        message: "GETALL"
    }) 
})

app.post('/insertingData', (req, res) => {
    console.log('TEST: running -> insertingData route [post]', req.body)
    let dbService = new DbService();
    let sendData = dbService.connectionTest(
        `
        INSERT INTO colors (
            
            color
        )
        VALUES (
            
            "new color added"
        )
        `
    )
    sendData.then((response) => {
        console.log(response.result)

        //return response to front end for testing
        return res.json({
            success: true,
            recievedData: response.result
        })
    })
})

//var for user auth
const users = []

//route for auth, test in request.rest
app.get('/users', (req, res) => {
    console.log("testing route: /users (Get)")
    res.json(users)
})

//use post reqs to create users
//need session cookie for knowing if user is logged !!
app.post('/users', async (req, res) => {
    let user = {};

    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(req.body.name)
        console.log(salt)
        console.log(hashedPassword)
        user = {
            name: req.body.name,
            password: hashedPassword
            // password: 'kubo'
        }
        users.push(user)
        // res.status(201).send()
    } catch {
        // res.status(500).send()
    } 

    console.log('TEST: running -> users route [post]')

    // let myQuizData = req.body.data.myQuizData;

    let dbService = new DbService();
    let loginFormData = req.body.data;

    let sendData = dbService.connectionTest(
        `
        INSERT INTO login (
            
            uname,
            pword
        )
        VALUES (
            
            '${user.name}',
            '${user.password}'
        )
        `
    )

    sendData.then((response) => {
        console.log(response.result)

        return res.json({
            success: true,
            recievedData: response.result
        })
    })
})

//login route
app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) //compare unhash and hash
        {
            //if the pw is the same, the user can log in

            // res.send('success')
        } else {

            // res.send('not allowed')
        }
    } catch {
        res.status(500).send()
    }
})

//test route for form (bleach)
app.get('/bleach', (req, res) => {
    console.log("BANKAI!! >> get")
    res.json()
})

app.post('/bleach', (req, res) => {
    console.log("BANKAI!! >> post")

    console.log(req.body.userInput); //test for console

    let dbService = new DbService();
    let loginFormData = req.body.userInput;

    let sendData = dbService.connectionTest(
        `
        INSERT INTO contacts (
            
            theData
        )
        VALUES (
            
            '${req.body.userInput}'
        )
        `
    )

    sendData.then((response) => {
        console.log(response.result)

        return res.json({
            success: true,
            recievedData: response.result
        })
    })
})

//QUIZ ON SUBMIT
app.get('/quizSubmission', (req, res) => {
    console.log("route: quizSubmission (get) >>byakuya kuchiki");
})

app.post('/quizSubmission', (req, res) => {
    console.log("route: quizSubmission (post) >>byakuya kuchiki");

    let dbService = new DbService();
    let quizFormData = req.body.userInput;

    let sendData = dbService.connectionTest(
        `
        INSERT INTO thequizresults (
            
            results,
            testie
        )
        VALUES (
            
            '${req.body.userInput[0]}',
            '${req.body.userInput[1]}'
        )
        `
    )

    sendData.then((response) => {
        console.log(response.result)

        return res.json({
            success: true,
            recievedData: response.result
        })
    })
})



//start local server, test with nodemon app
app.listen(process.env.PORT, () => console.log('app is running'));
