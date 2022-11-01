var express = require('express');
var router = express.Router();
var consulta = require('./../modelos/consulta');
var trabajo = require('./../modelos/trabajo');
var vehiculos = require('./../modelos/vehiculos');

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/index')
});
router.post('/', async (req, res, next) => {
  try {
    var documento = req.body.documento;

    var data = await consulta.consulta(documento);

    var data1 = await trabajo.trabajo(documento);

    var data2 = await vehiculos.vehiculos(documento);

    if (data != undefined && data1 != undefined && data2 != undefined){
      res.render('users', {
        layout: 'layout',
        persona: req.session.nombre,
        documento: data.dni,
        nombre: data.nombre,
        telefono01: data.telefono01,
        telefono02:data.telefono02,
        telefono03:data.telefono03,
        telefono04:data.telefono04,
        telefono05:data.telefono05,
        fijo01:data.fijo01,
        fijo02:data.fijo02,
        fijo03:data.fijo03,
        fijo04:data.fijo04,
        fijo05:data.fijo05,
        mail01:data.mail01,
        mail02:data.mail02,
        mail03:data.mail03,
        empresa: data1.empresa,
        cuit: data1.cuit,
        categoria: data1.categoria,
        vehiculo01:data2.vehiculo01,
        vehiculo02:data2.vehiculo02,
        vehiculo03:data2.vehiculo03,
    });
    }

    else if (data != undefined && data1 != undefined){
      res.render('users', {
        layout: 'layout',
        persona: req.session.nombre,
        documento: data.dni,
        nombre: data.nombre,
        telefono01: data.telefono01,
        telefono02:data.telefono02,
        telefono03:data.telefono03,
        telefono04:data.telefono04,
        telefono05:data.telefono05,
        fijo01:data.fijo01,
        fijo02:data.fijo02,
        fijo03:data.fijo03,
        fijo04:data.fijo04,
        fijo05:data.fijo05,
        mail01:data.mail01,
        mail02:data.mail02,
        mail03:data.mail03,
        empresa: data1.empresa,
        cuit: data1.cuit,
        categoria: data1.categoria,
    });
    }

    else if (data != undefined && data2 != undefined){
      res.render('users', {
        layout: 'layout',
        persona: req.session.nombre,
        documento: data.dni,
        nombre: data.nombre,
        telefono01: data.telefono01,
        telefono02:data.telefono02,
        telefono03:data.telefono03,
        telefono04:data.telefono04,
        telefono05:data.telefono05,
        fijo01:data.fijo01,
        fijo02:data.fijo02,
        fijo03:data.fijo03,
        fijo04:data.fijo04,
        fijo05:data.fijo05,
        mail01:data.mail01,
        mail02:data.mail02,
        mail03:data.mail03,
        vehiculo01:data2.vehiculo01,
        vehiculo02:data2.vehiculo02,
        vehiculo03:data2.vehiculo03,
    });
    }

    else if (data1 != undefined && data2 != undefined){
      res.render('users', {
        layout: 'layout',
        persona: req.session.nombre,
        vehiculo01:data2.vehiculo01,
        vehiculo02:data2.vehiculo02,
        vehiculo03:data2.vehiculo03,
        empresa: data1.empresa,
        cuit: data1.cuit,
        categoria: data1.categoria,
    });
    }

    else if (data != undefined){
      res.render('users', {
        layout: 'layout',
        persona: req.session.nombre,
        documento: data.dni,
        nombre: data.nombre,
        telefono01: data.telefono01,
        telefono02:data.telefono02,
        telefono03:data.telefono03,
        telefono04:data.telefono04,
        telefono05:data.telefono05,
        fijo01:data.fijo01,
        fijo02:data.fijo02,
        fijo03:data.fijo03,
        fijo04:data.fijo04,
        fijo05:data.fijo05,
        mail01:data.mail01,
        mail02:data.mail02,
        mail03:data.mail03,
    });
    }

    else if (data1 != undefined) {
      console.log(data1.empresa);
      res.render('users', {
        layout: 'layout',
        persona: req.session.nombre,
        empresa: data1.empresa,
        cuit: data1.cuit,
        categoria: data1.categoria,

      });}
      else if (data2 != undefined) {
        console.log(data1.empresa);
        res.render('users', {
          layout: 'layout',
          persona: req.session.nombre,
          vehiculo01:data2.vehiculo01,
          vehiculo02:data2.vehiculo02,
          vehiculo03:data2.vehiculo03,
  
        });}

       else {
      res.render('users', {
        persona: req.session.nombre,
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
})

  /*router.post('/', async (req, res, next) => {
  try {
    var documento = req.body.documento;

    var data = await consulta.consulta(documento);

    if (data != undefined) {
      console.log(data.NOMBRE);

      res.render('users', {
        layout: 'layout',
        persona: req.session.nombre,
        documento: data.DNI,
        nombre: data.NOMBRE,
        mail: data.MAIL,
        telefono: data.TELEFONO1,
      });

    } else {
      res.render('users', {
        persona: req.session.nombre,
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
})

   

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users', {
    layout: 'layout',
    persona: req.session.nombre,

  });
});


module.exports = router;
