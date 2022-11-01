var pool = require('./bd');
var md5 = require('md5');

async function getUsuario (user,password){
    try {
        var query = 'select * from usuarios where usuario = ? and password = ?  ';
        var rows = await pool.query(query, [user ,md5(password)]);
        return rows[0];
    } catch (error){
        console.log (error);
    }
}

module.exports = {getUsuario}