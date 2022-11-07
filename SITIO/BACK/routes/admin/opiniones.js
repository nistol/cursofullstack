var express = require('express');
var router = express.Router();
var opinionesModel = require('../../modelos/opinionesModel');


router.get('/', async function(req, res, next) {
  var opiniones = await opinionesModel.getOpiniones();
  console.log(opiniones);
  res.render('admin/opiniones',{
  layout:'admin/layout',
  persona: req.session.nombre,
  opiniones

});
});

router.get ('/agregar', (req,res,next) => {
  res.render ('admin/agregar' , {
    layout : 'admin/layout'
  });
});

router.post ('/agregar' , async(req,res,next) =>{
  try{
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
      await opinionesModel.insertOpinion(req.body);
      res.redirect('/admin/opiniones');
    }else{
      res.render('admin/agregar',{
        layout:'admin/layout',
        error:true,
        message:'todos los campos son requeridos'
      })
    }
  } catch(error){
    console.log(error);
    res.render('admin/agregar',{
      layout:'admin/layout',
      error: true,
      message:'Hubo un error y no se cargo la novedad'
    });
  }
});

router.get ('/eliminar/:id', async (req,res,next) => {
  var id = req.params.id;
  await opinionesModel.deleteOpiniones(id);
  res.redirect('/admin/opiniones')
});

router.get ('/modificar/:cuerpo/:id', async (req,res,next) => {
  let id = req.params.id;
  let pija = req.params.cuerpo;
  let obj = {`${pija}`:null};
  let opiniones = await opinionesModel.getOpinionesById(obj,id);
   res.redirect('/admin/opiniones');
});

router.post('/modificar', async(req,res,next) =>{
  try{
    let obj = {
      titulo: req.body.titulo,
      subtitulo:req.body.subtitulo,
      cuerpo:req.body.cuerpo
    }
    await opinionesModel.modificarOpinionById(obj,req.body.id);
    res.redirect('/admin/opiniones')
  } catch (error){
    console.log(error);
    res.render('admin/modificar',{
      layout:'admin/layout',
      error:true,
      message:'no se modifico la opinion'
    })
  }
})


module.exports = router;