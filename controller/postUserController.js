const User = require("../models/user")


const postUserController = async(req, res) => {
    try {
        const {name,email,age} = req.body;
        

        //Validating if any value are empty
        if(name === "" || email === "" || age==="")
        {
            res.send({status:"All field requied"})
        }
        else{
            const user =  await User.findOne({email})      
            if(!user){          
                const newUser = new User({name,email,age})
                await newUser.save();
                res.send(newUser).status(201);
            }
            else{

                res.send({status:"Dublicate Entry"})        //If user already exists
            }
        }

    } catch (error) {
        res.status(500).json({status:"Server Problem :("})
        console.log(error)
    }

}


module.exports = postUserController;