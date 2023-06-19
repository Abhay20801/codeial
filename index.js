const express = require('express');
const app = express();

const port = 8000;

   // Use Express route
   app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in rinning the server: ${port}`);
    }

    console.log(`Server is running on port: ${port}`);
});
