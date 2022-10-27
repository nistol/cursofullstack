var express = require('express');
var router = express.Router();
var consulta = require('./../modelos/consulta');

router.get('/logout',function(req,res,next) {
  req.session.destroy();
  res.redirect('/index')
});

router.post('/', async (req, res, next) => {
  try {
    var documento = req.body.documento;

    var data = await consulta.consulta(documento);

    if (data != undefined) {
      console.log(data.NOMBRE);
      /*req.session.documento = data.DNI;
      req.session.nombre = data.NOMBRE;
      req.session.telefono = data.TELEFONO1;
      req.session.mail = data.MAIL;*/
      res.render('users',{
        layout:'layout',
        persona:req.session.nombre,
        documento:data.DNI,
        nombre:data.NOMBRE,
        mail:data.MAIL,
        telefono:data.TELEFONO1,
        nombre2:data.NOMBRE[0]
      
      });
      
    } else {
      res.render('index', {
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{
    layout:'layout',
    persona:req.session.nombre,
  
  });
});


module.exports = router;
