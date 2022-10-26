var express = require('express');
var router = express.Router();
var consulta = require('./../modelos/consulta');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: "pruebamaxi"
  });
});
router.post('/', async (req, res, next) => {
  try {
    var documento = req.body.documento;

    var data = await consulta.consulta(documento);

    if (data != undefined) {
      req.session.documento = data.DNI;
      res.redirect('/users');
      
    } else {
      res.render('index', {
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
})

/*router.get('/logout',function(req,res,next) {
    req.session.destroy();
    res.redirect('/admin/login')
  });*/


module.exports = router;
