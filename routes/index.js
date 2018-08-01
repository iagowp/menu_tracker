var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/proteins', async (req, res) => {
  const proteinTypes = await models.ProteinType.findAll();
  const proteins = await models.Protein.findAll();
  res.render('index', {
    title: 'Gerenciador de menus',
    proteinTypes,
    proteins
  });
});

router.get('/complements', async (req, res) => {
  const complementTypes = await models.ComplementType.findAll();
  const complements = await models.Complement.findAll();
  res.render('index', {
    title: 'Gerenciador de menus',
    complementTypes,
    complements
  });
});

router.post('/complement/create', async (req, res) => {
  await models.Complement.create(req.body);
  const complementTypes = await models.ComplementType.findAll();
  const complements = await models.Complement.findAll();
  res.render('index', {
    title: 'Gerenciador de menus',
    complementTypes,
    complements
  });
});

module.exports = router;
