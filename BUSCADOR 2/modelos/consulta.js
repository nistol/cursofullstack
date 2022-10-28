var pool = require('./bd');

async function consulta (documento){
    try {
        var query = 'select * from celulares where dni = ? ';
        var rows = await pool.query(query, [documento]);
        return rows[0];
    } catch (error){
        console.log (error);
    }
}

module.exports = {consulta}