const express = require('express');
const app = express();

const port = 8000;

const expressLayout = require('express-ejs-layouts');

app.use(expressLayout);
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
