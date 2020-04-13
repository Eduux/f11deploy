const mongoose = require('../database');

const ExcelSchema = new mongoose.Schema({
  UF: {
    type: String,
    require: false,
  },
  MUNICIPIO: {
    type: String,
    require: false
  },
  LOGRADOURO: {
    type: String,
    require: false
  },
  NUM_FACHADA: {
    type: String,
    require: true,
  },
  COMPLEMENTO: {
    type: String,
    require: false
  },
  COMPLEMENTO2: {
    type: String,
    require: false
  },
  COMPLEMENTO3: {
    type: String,
    require: false
  },
  CEP: {
    type: String,
    require: true,
  },
  BAIRRO: {
    type: String,
    require: true,
  },
  QUANTIDADE_UMS: {
    type: String,
    require: false
  },
  COD_VIABILIDADE: {
    type: String,
    require: false
  }
});

const Excel = mongoose.model('Excel', ExcelSchema);

module.exports = Excel;
