const express = require('express');
const Robodata = require('../model/robotData');
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
      Name: req.body.name,
      Energy: req.body.energy,
      Power: req.body.power,
      Price: req.body.price
    };
    const robot = new Robodata(robo);
    robot.save();
    res.redirect('/admin');
  });
  adminRouter.route('/delrobo').get((req, res) => {
    Robodata.find().then(robot => {
      res.render('delRobo', {
        title: 'Remove Robot',
        nav,
        robot
      });
    });
  });
  adminRouter.route('/delrobo/').delete((req, res) => {
    const roboId = req.query.Robo
    roboData.findByIdAndRemove(roboId);
    res.redirect('/admin');
  });
  return adminRouter;
};

module.exports = router;
