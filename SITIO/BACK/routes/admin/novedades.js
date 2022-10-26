var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('admin/novedades',{layout:'admin/layout',
  persona: req.session.nombre,
  ID: req.session.id_usuario,
  password: req.session.password,
  title: "pruebamaxi"

});
});
module.exports = router;