const express = require('express');
const app = express();

const port = 8000;
const cookieParser = require('cookie-parser');

const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
// Reading through POST request
app.use(express.urlencoded());

// Setup The cookieParser
app.use(cookieParser());
// Setup the static file
// First we tell app in which folder to look for static files
app.use(express.static('./assests'));

app.use(expressLayout);

// Extract styles and scripts from subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// Set up the view engine
   app.set('view engine','ejs');
    app.set('views','./views');


// Middleware which takes the session cookies & encrypts it
app.use(session({
    // Name of cookie or software
    name:'codeial',
    // ToDO: Change the secret before deployment in production mode
    secret:"blahblah",
    saveUninitialized:false,
    resave:false,
    cookie: {
        // No of seconds in ms
        maxAge: (1000 * 60 * 100)
    }


}));

app.use(passport.initialize());
app.use(passport.session());


app.use(passport.setAuthenticatedUser);

   // Use Express route
   app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in rinning the server: ${port}`);
    }

    console.log(`Server is running on port: ${port}`);
});
