const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileUplode = require('express-fileupload');
const path = require('path');
const createError = require('http-errors');
const port = 8080;

const home = require('./routes/home');
const menu = require('./routes/menu');
const about = require('./routes/about');
const contact = require('./routes/contact');
const reservation = require('./routes/reservation');
const adminLogin = require('./routes/adminLogin');
const loginForm = require('./routes/loginForm');
const login = require('./routes/login');

const app = express();

//view engine setup
app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: "thisismysecrctekey JATIN BHALL this should be enough Right! ",
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 },
  resave: false
}));
app.use(fileUplode({
  limits: {
    fieldSize: 10000000,
  },
  abortOnLimit: true,
}));

app.use('/menu', menu);
app.use('/contact', contact);
app.use('/about', about);
app.use('/reservation', reservation);
app.use('/adminLogin', adminLogin);
app.use('/login', login);
app.use('/loginForm', loginForm);
app.use('/', home);

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