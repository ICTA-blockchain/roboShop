const express = require('express');
const roboData = require('../model/robotData');
const chalk = require('chalk');
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
    const robot = new roboData(robo);
    robot.save((err, data) => {
      if (err) {
        return console.log(chalk.blue(err));
      }
      console.log(data);
    });
    res.redirect('/admin');
  });
  adminRouter.route('/delrobo/:id').get((req, res) => {
    var roboId = req.params.id;
    console.log(roboId);
    roboData.findByIdAndRemove(roboId, (err, data) => {
      if (err) {
        return console.log(err);
      }
      console.log(data);
      res.send('Deletered successfully');
    });
  });

  return adminRouter;
};

module.exports = router;
