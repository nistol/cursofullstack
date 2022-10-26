
const mysql = require('mysql');
const conection = mysql.createConnection({
    host: 'localhost',
    user: 'maxi',
    password: 'maxi',
    database: 'max'
})
 
    conection.connect((err) => {
        if (err) throw err
        console.log('la conexion funcionan')
    }) 
  
    conection.query(`SELECT * from empleados where apellido ="Dharma"`, (err, datos) => {
        if (err) throw err
        console.log(datos);
       
    })

   module.exports =conection;
    conection.end()