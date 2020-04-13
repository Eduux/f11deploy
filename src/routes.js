/* eslint-disable no-undef */
const express = require('express');
const multer = require('multer');
const path = require('path');

const authMiddleware = require('../src/middlewares/auth');

const ExcelController = require('./controllers/ExcelController');

// eslint-disable-next-line no-undef
global.__basedir = __dirname;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
     // eslint-disable-next-line no-undef
     cb(null, __dirname + '/temp/')
  },
  filename: (req, file, cb) => {
     cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
  }
});

const upload = multer({ storage: storage });

const routes = express.Router();

routes.use(express.static(path.join(__dirname,'./front')));

routes.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './front', 'index.html'));
});

routes.use(authMiddleware);


routes.post('/excel', upload.single("excel"), (req, res) => ExcelController.import(req, res, __dirname));
routes.get('/excel', ExcelController.find);
routes.delete('/excel', ExcelController.resetCollection);
routes.get('/excel/getCount', ExcelController.getCount);
routes.post('/excel/findByExcel', upload.single("excel"), (req, res) => ExcelController.findByExcel(req, res, __dirname));

module.exports = routes;
