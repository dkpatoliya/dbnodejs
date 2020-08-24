const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


const getData = async (req,res)=>{
    const productData = await knex('public.product').select('*')
    console.log(productData);
    res.send(productData)
}

// INSERT INTO public.product(
// 	id, product_name, created_at, modified_at)
// 	VALUES (?, ?, ?, ?);

const insertData = async (req,res) =>{
    const output = await knex('public.product').insert({product_name: 'test_product_1'})
    console.log(op);
    res.end('Data Inserted'+output.join());
}

const delData = async(req,res)=>{
    const id=8;
    const output=await knex('public.product').del().where('id', id)
    res.end(output)
}
    

router.get('/v',insertData);
router.get('/test',getData);
router.get('/del/',delData);



module.exports =router;