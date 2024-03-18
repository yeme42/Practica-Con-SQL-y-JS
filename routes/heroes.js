const express = require('express');
const router = express.Router();

const service = require("./../models/heroes")

// LISTA TODOS LOS HEROES DE MI TABLA

const list = (req,res)=>
    service.list()
    .then((response)=>res.json(response))
    .catch((e)=>res.json({e}));

const single = (req, res)=>
    service
    .list({id: req.params.id})
    .then((response)=>res.json(response))
    .catch((e)=>res.json({e}));

const create = (req, res)=>{
    const heroe = ({ nombre , descripcion , aparicion } = req.body);
    return service
    .create(heroe)
    .then((res)=>res.json(res))
    .catch((e)=>res.json(e));
}

const update = (req, res)=>{
    const heroe = ({ nombre , descripcion , aparicion } = req.body);
    return service
    .update({id: req.params.id}, heroe)
    .then((res)=>res.json(res))
    .catch((e)=>res.json(e));
}

router.get('/all',list)
router.get('/:id', single)
router.post('/', create)
router.put('/:id', update)


module.exports = router;