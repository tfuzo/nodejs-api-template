'use strict';

exports.status = (req, res, next) => {
  var num = 500000000
  res.status(200).json(+num);
};
