const Product = require("../model/productModel")

// create Product

exports.createProduct = async (req,res,next)=>{
     const product = await Product.create(req.body);

     res.status(201).json({
          success:true,
          product
     })
}

exports.getAllProducts = (req,res) =>{
     res.status(200).json({massage:"Route is working fine"})
}