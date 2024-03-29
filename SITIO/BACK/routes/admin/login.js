var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../modelos/usuariosModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout',
    title: "pruebamaxi"
  });
});

router.get('/logout',function(req,res,next) {
    req.session.destroy();
    res.redirect('/admin/login')
  });

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUsuario(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.ID;
      req.session.nombre = data.usuario;
      req.session.password = data.password;
      res.redirect('/admin/opiniones');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
