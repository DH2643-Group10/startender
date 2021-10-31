const jwt = require('express-jwt')
const {sign, verify} = require('jsonwebtoken')

const createTokens = (user) => {
    const accessToken = sign(
        {
            username: user.username,
            id: user.id,
            name: user.name,
            email:user.email,
            favourites:user.favourites,
            createdAt:user.createdAT
        },
        process.env.ACCESS_TOKEN_SECRET)
    return accessToken
}

const authenticateToken = (req, res, next) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token==null) return res.sendStatus(401)

    verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if(err) return res.sendStatus(403)
        req.user = user
        req.isAuthenticated = true
        next()
    })
}

module.exports = {createTokens, authenticateToken}