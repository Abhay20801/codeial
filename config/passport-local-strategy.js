const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

// Require USer Or Find user
const User = require('../models/user');

// Authentication using Passort
// * it contains some inbuilt function
passport.use(new LocalStrategy({
    usernameField: 'email', 
    },
    function(email,password,done){
        // Find the user and establish the identity
        //:email belongs to which is passed on
        // Whenever passport is called email and password is automatically passed on from where we'll see
        User.findOne({email:email},function(err,user){
            if(err){
                console.log("Error in finding the user",err);
                return done (err);
            }

            if(!user || user.password != password){
                console.log("Invalid Username/password");
                return done(null,false);
            }

            // If user Found
            return done(null,user);
        });
    }
    ))

    // Serialize the user to decide which key is to be kept in the cookies
    passport.serializeUser(function(user,done){
        done(null,user.id);
    })

    // Deserialize the user from the key in the cookies
    passport.deserializeUser(function(id,done){
        // Find the user if its in the db
        User.findById(id).then((user)=>{
            return done(null,user); 
    }).catch((err)=>{
        console.log("Error in finding the user",err);
        return done (err);
    })

});

// Only Exporting the passport not the strategy
module.exports= passport