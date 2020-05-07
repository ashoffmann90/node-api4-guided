module.exports = (req, res, next) => {
    const {authorization} = req.headers

    const API_SECRET = process.env.API_SECRET

    if(authorization === API_SECRET){
        next()
    } else {
        res.status(403).json({ you: "have no power here"})
    }
}

// To define your API_SECRET:
//in Heroku add API_SECRET as a key, and your password as the value
//on local environment, add it to your .env file