'use strict';

exports.status = (req, res, next) => {
  var num = 431240095.69

  res.status(200).json(+num);
};
