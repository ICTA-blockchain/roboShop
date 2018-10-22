const express = require('express');
const bodyParser = require("body-parser");
const chalk = require('chalk');
const path = require('path');
const app = new express();
//setting ejs
app.set('views', './src/views');
app.set('view engine', 'ejs');
// const roboData = require('./src/model/robotData');
const nav = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Shop',
    link: '/shop'
  },
  {
    title: 'Contact Us',
    link: '/contact'
  }
];
//import routers
const userPage = require('./src/routes/userRoutes')(nav);
const adminPage = require('./src/routes/adminRoutes')();


app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', userPage);
app.use('/admin', adminPage);
const port = process.env.PORT || 2255 ;
app.listen(port, () => {
  console.log('listening on port'+chalk.blue(port));
});
