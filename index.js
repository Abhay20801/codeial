const express = require('express');
const app = express();

const port = 8000;

const expressLayout = require('express-ejs-layouts');

// Setup the static file
// First we tell app in which folder to look for static files
app.use(express.static('./assests'));

app.use(expressLayout);

// Extract styles and scripts from subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

   // Use Express route
   app.use('/',require('./routes/index'));
// Set up the view engine
   app.set('view engine','ejs');
    app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in rinning the server: ${port}`);
    }

    console.log(`Server is running on port: ${port}`);
});
