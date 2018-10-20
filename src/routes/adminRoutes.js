const express = require('express');
const roboData = require('../model/robotData');
const adminRouter = express.Router();
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
  },
  {
    title: 'Admin',
    link: '/admin'
  }
];

router = () => {
  adminRouter.route('/').get((req, res) => {
    res.render('admin', {
      title: 'Admin Page',
      nav
    });
  });
  adminRouter.route('/addrobo').get((req, res) => {
    res.render('addrobo', {
      title: 'Add Robot',
      nav
    });
  });
  adminRouter.route('/addrobo').post((req, res) => {
    res.render('addrobo', {
      title: 'Add Robot',
      nav
    });

    const robo = {
      Name: req.param.name,
      Energy: req.param.energy,
      Power: req.param.power,
      Price: req.param.price
    };
    const robot = new roboData(robo);
    robot.save();
    res.redirect('/admin');
  });
  adminRouter.route('/delrobo').get((req, res) => {
    res.send('Hello world');
  });

  return adminRouter;
};

module.exports = router;
