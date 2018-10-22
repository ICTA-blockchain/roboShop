const express = require('express');
const Robodata = require('../model/robotData');
const userRoutes = express.Router();
router = nav => {
  userRoutes.route('/').get((req, res) => {
    Robodata.find().then(robot => {
      res.render('index', {
        title: 'RoboShop',
        nav,
        robot
      });
    });
  });
  userRoutes.route('/shop').get((req, res) => {
    Robodata.find().then(robot => {
      res.render('shop', {
        title: 'RoboShop',
        nav,
        robot
      });
    });
  });
  userRoutes.route('/contact').get((req, res) => {
    res.render('contact', {
      title: 'Contact Us',
      nav
    });
  });
  userRoutes.route('/recipt').post((req, res) => {
    const Name = req.param('name');
    const Robot = req.param('robo');
    Robodata.find().then(robot => {
      res.render('recipt', {
        nav,
        Name,
        Robot 
      });
    });
  });
  userRoutes.route('/feedback').post((req, res) => {
    const Name = req.param('name');
    res.render('feedback', {
      nav,
      Name
    });
  });
  return userRoutes;
};

module.exports = router;
