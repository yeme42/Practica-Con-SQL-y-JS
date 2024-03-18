const bd = require ("./../db");

const list = (params = {}) => bd(process.env.T_HEROES)
    .where(params)
    .select("id", "nombre","descripcion", "aparicion")
    .where("habilitado","=",1);


const create = (obj) => bd(process.env.T_HEROES).insert(obj);

const update = (params, obj) => 
    bd(process.env.T_HEROES).where(params).update(obj);

module.exports = { list, create, update };