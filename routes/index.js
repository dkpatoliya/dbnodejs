const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


// show Product data
const showProduct = async (req,res)=>{
    const productData = await knex('public.product').select('*')
    console.log(productData);
    res.send(productData);
}

// insert Product data
const insertProduct = async (req,res,next) =>{

    const input = {
            product_name: req.body.product_name,
        }

    console.log(input);
    const output = await knex('public.product').insert(input)
    console.log(output);
}

// delet Product Data
const delProduct = async(req,res)=>{
    const id =req.body.id;
    const output=await knex('public.product').del().where('id', id)
    res.end(output);
}

router.get('/show_roduct',showProduct);
router.post('/insert_product',insertProduct);
router.delete('/del_Product',delProduct);

router.get('/hello',(req,res)=>{
    console.log('Hello console')
})







module.exports =router;