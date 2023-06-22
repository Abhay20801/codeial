// This is one controller which controls Many users
module.exports.profile = function(req,res){
    return res.render('user_profile', {
        title:"user profile",
     });
}