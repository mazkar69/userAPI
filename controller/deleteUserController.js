const User = require("../models/user");




const deleteUserController = async (req,res)=>{

    try {
        const {email} = req.body;
        if(email){
            const user = await User.findOne({email});
            if(user){
                const result = await User.deleteOne({email});
                res.send(result)
            }
            else{
                res.send({status:"User does't exist"});

            }
        }
        else{
            
            res.send({status:"Invalid email "});
        }
    } catch (error) {
        console.log(error);
        res.send({status:"Server Problem :("}).status(500)
    }
}

module.exports = deleteUserController;
