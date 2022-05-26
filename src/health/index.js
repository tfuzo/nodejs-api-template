'use strict';

exports.status = (req, res, next) => {
  var num = 184423400.69

  res.status(200).json(+num);
};
