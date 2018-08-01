var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', async (req, res) => {
  const complementTypes = await models.ComplementType.findAll();
  const complements = await models.Complement.findAll();
  res.render('index', {
    title: 'Gerenciador de menus',
    complementTypes,
    complements
  });
});

// router.post('/complement/create', async (req, res) => {
//   console.log(req.body);
//   const complementTypes = await models.ComplementType.findAll();
//   const complements = await models.Complement.findAll();
//   res.render('index', {
//     title: 'Gerenciador de menus',
//     complementTypes,
//     complements
//   });
// });

module.exports = router;
