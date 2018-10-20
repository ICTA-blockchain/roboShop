const express = require('express');

const userRoutes = express.Router();
router = nav => {
  const robotlist = [
    {
      Name: 'dennis',
      Energy: '1',
      Power: '4',
      Price: '6'
    },
    {
      Name: 'ghch',
      Energy: '1',
      Power: '4',
      Price: '6'
    },
    {
      Name: 'jhg',
      Energy: '1',
      Power: '4',
      Price: '6'
    },
    {
      Name: 'dennis',
      Energy: '1',
      Power: '4',
      Price: '6'
    }
  ];

  userRoutes.route('/').get((req, res) => {
    res.render('index', {
      title: 'RoboShop',
      nav,
      robot: robotlist
    });
  });
  userRoutes.route('/shop').get((req, res) => {
    res.render('shop', {
      title: 'RoboShop',
      nav,
      robot: robotlist
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
    res.render('recipt', {
      nav,
      Name,
      Robot
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