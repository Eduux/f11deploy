const fs = require('fs');
const csvtojson = require("csvtojson");
const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");

const Excel = require('../models/Excel');

module.exports = {
  async import(req, res, fileName) {
    req.setTimeout(10000000);
    try {
      if (req.file) {
        const file = req.file;
        const findExtension = file.originalname.split('.')[file.originalname.split('.').length -1];
        const path = fileName + '/temp/' + file.filename;

        if(findExtension === 'csv') {
          const json = await csvtojson({
            delimiter: ';',
            includeColumns: /(UF|MUNICIPIO|LOGRADOURO|NUM_FACHADA|COMPLEMENTO|CEP|BAIRRO|QUANTIDADE_UMS|COD_VIABILIDADE)/
          }).fromFile(path);

          await fs.unlinkSync(path);

          json.shift();

          processRecords(0, 100000, 10 * 1000, json, () => {
            return res.status(201).json('Importado com sucesso!');
          });
        }
        if (findExtension === 'xls') {
          xlstojson({ input: path, output: null }, async (err, result) => {
            if (!err) {
              await fs.unlinkSync(path);

              result.shift();

              processRecords(0, 100000, 10 * 1000, result, () => {
                return res.status(201).json('Importado com sucesso!');
              });

              return res.status(201).json('Importado com sucesso!');
            } else {
              return res.status(400).json('Erro na importação!');
            }
          });
        }
        if (findExtension === 'xlsx') {
          xlsxtojson({ input: path, output: null }, async (err, result) => {
            if (!err) {
              await fs.unlinkSync(path);

              result.shift();

              processRecords(0, 100000, 15 * 1000, result, () => {
                return res.status(201).json('Importado com sucesso!');
              });

              return res.status(201).json('Importado com sucesso!');
            } else {
              return res.status(400).json('Erro na importação!');
            }
          });
        }
      } else {
        return res.status(400).json('Nenhum arquivo informado!');
      }
    } catch (err) {
      return res.status(400).json('Erro na importação!');
    }
  },
  async resetCollection(req, res) {
    try {
      await Excel.collection.drop();

      return res.status(201).json('Reset feito com sucesso!');
    } catch (err) {
      return res.status(400).json('Erro ao fazer o delete!');
    }
  },
  async find(req, res) {
    const { numFachada, cep } = req.query;

    let queryOBject = {};

    if (numFachada) queryOBject.NUM_FACHADA = numFachada;
    if (cep) queryOBject.CEP = cep;

    try {
      const items = await Excel.find(queryOBject);

      return res.send({ items, count: items.length });
    } catch (err) {
      return res.status(400).send({ error: 'Erro ao achar cobertura' });
    }
  },
  async findByExcel(req, res, fileName) {
    req.setTimeout(10000000);
    try {
      if (req.file) {
        const file = req.file;
        const findExtension = file.originalname.split('.')[file.originalname.split('.').length -1];
        const path = fileName + '/temp/' + file.filename;

        if(findExtension === 'csv') {
          const json = await csvtojson({ delimiter: ';' }).fromFile(path);

          await fs.unlinkSync(path);

          json.shift();

          const searched = await Excel.find({
            CEP: { $in: json.map(item => item.CEP) },
            NUM_FACHADA: { $in: json.map(item => item['Número']) }
          }, { CEP: 1, NUM_FACHADA: 1 });

          const roofResult = [];
          json.forEach((item) => {
            if (searched.find(s => (s.CEP === item.CEP && s.NUM_FACHADA === item['Número']))) {
              roofResult.push({ ...item, hasRoof:'Sim' });
            } else {
              roofResult.push(item);
            }
          });

          return res.send(roofResult);
        }
        if (findExtension === 'xls') {
          xlstojson({ input: path, output: null }, async (err, result) => {
            if (!err) {
              await fs.unlinkSync(path);

              result.shift();

              const searched = await Excel.find({
                CEP: { $in: result.map(item => item.CEP) },
                NUM_FACHADA: { $in: result.map(item => item['Número']) }
              }, { CEP: 1, NUM_FACHADA: 1 });

              const roofResult = [];
              result.forEach((item) => {
                if (searched.find(s => (s.CEP === item.CEP && s.NUM_FACHADA === item['Número']))) {
                  roofResult.push({ ...item, hasRoof:'Sim' });
                } else {
                  roofResult.push(item);
                }
              });

              return res.send(roofResult);
            } else {
              return res.status(400).json('Erro na importação!');
            }
          });
        }
        if (findExtension === 'xlsx') {
          xlsxtojson({ input: path, output: null }, async (err, result) => {
            if (!err) {
              await fs.unlinkSync(path);

              result.shift();

              const searched = await Excel.find({
                CEP: { $in: result.map(item => item.CEP) },
                NUM_FACHADA: { $in: result.map(item => item['Número']) }
              }, { CEP: 1, NUM_FACHADA: 1 });

              const roofResult = [];
              result.forEach((item, index) => {
                console.log(index);
                if (searched.find(s => (s.CEP === item.CEP && s.NUM_FACHADA === item['Número']))) {
                  roofResult.push({ ...item, hasRoof:'Sim' });
                } else {
                  roofResult.push(item);
                }
              });

              return res.send(roofResult);
            } else {
              return res.status(400).json('Erro na importação!');
            }
          });
        }
      } else {
        return res.status(400).json('Nenhum arquivo informado!');
      }
    } catch (err) {
      return res.status(400).json('Erro na importação!');
    }
  },
  async getCount(req, res) {
    try {
      const count = await Excel.collection.countDocuments();

      return res.send({ count });
    } catch (err) {
      return res.status(400).send({ error: 'Erro ao contar dados' });
    }
  }
}


function processRecords(startIdx, n, delay, json, cb) {
  if (startIdx >= json.length) {
    return cb();
  }
  Excel.insertMany(json.slice(startIdx, startIdx + n), (err,) => {
    if (err) throw err;
    setTimeout(() => processRecords(startIdx + n, n, delay, json, cb), delay);
  });
}
