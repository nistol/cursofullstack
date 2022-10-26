var pool = require('./bd');

async function consulta (documento){
    try {
        var query = 'select * from personas where DNI = ? limit 1 ';
        var rows = await pool.query(query, [documento]);
        return rows[0];
    } catch (error){
        console.log (error);
    }
}

module.exports = {consulta}