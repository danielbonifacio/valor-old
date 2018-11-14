module.exports = (req, res, next) => {
  req.params.id
    ? next()
    : res.send('403');
};
