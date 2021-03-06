const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
var cors = require('cors')

const loginRouter = require('./routes/loginRoutes');
const adminRouter = require('./routes/adminRoutes');
const publicRouter = require('./routes/publicRoutes');
const emailRouter = require('./routes/emailRoutes');
 
const app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(logger('dev'));  
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser()); 
app.use(session({ secret: 'blog', cookie: { maxAge: 500000 }, resave: false, saveUninitialized: false }));
require('./config/passport.js')(app);  

//add styles
app.use(express.static(__dirname + '/public'));
//add static bootstrap
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
//add jquery
app.use(express.static(__dirname + '/node_modules/jquery/dist'));

app.use('/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/public', publicRouter);
app.use('/email', emailRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
