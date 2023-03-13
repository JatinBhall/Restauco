const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const createError = require('http-errors');
const port = 8080;

const home = require('./routes/home');
const menu = require('./routes/menu');
const about = require('./routes/about');
const contact = require('./routes/contact');
const reservation = require('./routes/reservation');

const app = express();

//view engine setup
app.set('views', 'views');
app.set('view engine', "ejs");

// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',home);
app.use('/menu',menu);
app.use('/about',about);
app.use('/contact',contact);
app.use('/reservation',reservation);

//catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
//error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`server is running on ${port}`));