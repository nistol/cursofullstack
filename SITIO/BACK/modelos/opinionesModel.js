var pool = require('./bd');

async function getOpiniones (){
   
        var query = 'select * from opiniones order by id asc ';
        var rows = await pool.query(query);
        return rows;
}

async function insertOpinion (obj){
    try {
        var query = 'insert into opiniones set ? ';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error){
        console.log (error);
        throw error;
    }
}

async function deleteOpiniones (id){
   
    var query = 'delete from opiniones where id = ? ';
    var rows = await pool.query(query,[id]);
    return rows;
}

async function getOpinionesById (id){
   
    var query = 'select * from opiniones where id = ? ';
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function modificarOpinionById (obj,id){
    try {
        var query = 'update opiniones set ? where id=? ';
        var rows = await pool.query(query, [obj,id]);
        return rows;
    } catch (error){
        throw error;
    }
}


module.exports = {getOpiniones , insertOpinion,deleteOpiniones,getOpinionesById,modificarOpinionById}