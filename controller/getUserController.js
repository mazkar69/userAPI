const User = require("../models/user")

const getUserController = async (req, res) => {
    try {
        const queryObject = {};
        let lim = 5;
        if (req.query.lim) {
            lim = req.query.lim;
        }

        if (req.query.email) {
            queryObject.email = req.query.email;
        }
        if (req.query.age) {
            queryObject.age = req.query.age;
        }
        const apiData = User.find(queryObject);

        if (req.query.name) {
            const regexPattern = new RegExp(req.query.name, 'i');       //Regex
            apiData.find({ name: { $regex: regexPattern } })
        }


        if (req.query.page) {
            apiData.skip((req.query.page - 1) * lim);
        }

        res.send(await apiData.limit(lim));

    } catch (error) {
        console.log(error)
    }
    // res.send(await User.find())
}

module.exports = getUserController;
