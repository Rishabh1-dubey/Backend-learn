const express = require("express");
const app = express();
const userModel = require("./models/user")


const dummyData=[
    {
        "username": "john_doe_91",
        "name": "John Doe",
        "password": "password123",
        "age": "32",
        "isMarried": false,
        "email": "john.doe91@example.com"
    },
    {
        "username": "sarah_smith23",
        "name": "Sarah Smith",
        "password": "securePass456",
        "age": "29",
        "isMarried": true,
        "email": "sarah.smith23@example.com"
    },
    {
        "username": "mike_jordan",
        "name": "Mike Jordan",
        "password": "jordanBest7",
        "age": "45",
        "isMarried": true,
        "email": "mike.jordan45@example.com"
    },
    {
        "username": "alice_lee",
        "name": "Alice Lee",
        "password": "aliceIsCool9",
        "age": "25",
        "isMarried": false,
        "email": "alice.lee25@example.com"
    },
    {
        "username": "tom_hardy78",
        "name": "Tom Hardy",
        "password": "hardy7890",
        "age": "35",
        "isMarried": true,
        "email": "tom.hardy78@example.com"
    },
    {
        "username": "nina_brown",
        "name": "Nina Brown",
        "password": "brownGirl123",
        "age": "27",
        "isMarried": false,
        "email": "nina.brown27@example.com"
    },
    {
        "username": "rick_sanchez",
        "name": "Rick Sanchez",
        "password": "getSchwifty007",
        "age": "50",
        "isMarried": true,
        "email": "rick.sanchez@example.com"
    },
    {
        "username": "jessica_white",
        "name": "Jessica White",
        "password": "whitenoise89",
        "age": "40",
        "isMarried": true,
        "email": "jessica.white@example.com"
    },
    {
        "username": "charles_bronson",
        "name": "Charles Bronson",
        "password": "charlieBrown789",
        "age": "33",
        "isMarried": false,
        "email": "charles.bronson33@example.com"
    },
    {
        "username": "emma_wilson",
        "name": "Emma Wilson",
        "password": "wilson987",
        "age": "28",
        "isMarried": true,
        "email": "emma.wilson28@example.com"
    },
    {
        "username": "george_carter",
        "name": "George Carter",
        "password": "georgeCarter2024",
        "age": "34",
        "isMarried": false,
        "email": "george.carter@example.com"
    },
    {
        "username": "lucas_green",
        "name": "Lucas Green",
        "password": "greenLeaf21",
        "age": "22",
        "isMarried": false,
        "email": "lucas.green@example.com"
    },
    {
        "username": "rachel_king",
        "name": "Rachel King",
        "password": "rachelQueen123",
        "age": "26",
        "isMarried": true,
        "email": "rachel.king26@example.com"
    },
    {
        "username": "daniel_clark",
        "name": "Daniel Clark",
        "password": "clarkKentSuperman",
        "age": "37",
        "isMarried": true,
        "email": "daniel.clark37@example.com"
    },
    {
        "username": "olivia_martin",
        "name": "Olivia Martin",
        "password": "oliviaRocks95",
        "age": "30",
        "isMarried": false,
        "email": "olivia.martin@example.com"
    }
]


app.get("/" ,function(req,res){
    res.send("it is working")
})

app.get("/createuser" , async function(req,res){

    let data = await userModel.find({$and:[{isMarried:false},{age:{$gte:18}}]})
    res.send( data);
})

app.listen(3000)