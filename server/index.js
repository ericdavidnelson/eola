const express = require ('express');
const mongoose = require('mongoose');
const cookieSesssion = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app =  express();

app.use(
    cookieSesssion({
        maxAge: 30 * 24 * 60 * 60* 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5500;

app.listen(PORT)