const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileUplode = require('express-fileupload');
const MtSQLStore = require('express-mysql-session')(session);
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
const sessionConnection = require('./utils/connection');

const app = express();

const sessionStore = new MtSQLStore({}, sessionConnection);

let sessionOption = {
  secret: "thisismysecrctekey JATIN BHALL this should be enough Right!",
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60,
  },
  store: sessionStore,
  name: 'restaucoSession',
  resave: false,
}
if (false) {
  app.set('trust proxy', 1);
  sessionOption.cookie.secure = true;
}

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(session(sessionOption));


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

app.listen(process.env.PORT || port, () => console.log(`server is running on ${port}`));