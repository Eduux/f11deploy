module.exports = async (req, res, next) => {
  const { apikey } = req.headers;

  if (!apikey || apikey !== 'F112020@SMEQ@123QWEASDZXC') {
    return res.status(401).json({ message: 'Não autorizado.' });
  }

  return next();
};
