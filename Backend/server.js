const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/userRouter.js');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();



app.use(session({
    key: 'userId',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 1
    }
}));

app.use(cookieParser());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use('/api', router);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
}); // start the server

app.get('/', (req, res) => {
    req.session.Auth = true;
    res.json({ message: req.session });
})

