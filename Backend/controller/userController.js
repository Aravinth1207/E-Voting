const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;




const user = db.User

const register = async (req, res) => {

    let info = {
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, saltRounds),
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    }

    let newUser = await user.create(info);
    res.status(200).send(newUser);
}

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    user.findOne({
        where: {
            username: username,
        }
    }).then(result => {
        if (result) {
            if (bcrypt.compareSync(password, result.password)) {
                req.session.user = result;
                console.log(req.session.cookie)
                res.status(200).send(req.session);
            } else {
                res.status(400).send('Wrong password');
            }
        } else {
            res.status(400).send('User not found');
        }
    })
}

const getByUsername = (req, res) => {
    const username = req.params.username;
    user.findOne({
        where: {
            username: username,
        }
    }).then(result => {
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(400).send('User not found');
        }
    })
}

module.exports = {
    register,
    login,
    getByUsername
}