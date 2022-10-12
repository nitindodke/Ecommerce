const Product = require("../model/productModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncError = require("../middleware/catchAsyncError");



// create Product ----> Admin

exports.createProduct = catchAsyncError(async (req,res,next)=>{

     const product = await Product.create(req.body);

     res.status(201).json({
          success:true,
          product
     });
});


// Get All Product

exports.getAllProducts = catchAsyncError(async (req,res) =>{

     const products = await Product.find();

     res.status(200).json({
          success:true,
          products
     })
})


// Get Product Details

exports.getProductDetails = catchAsyncError(async (req,res,next)=>{
     const product = await Product.findById(req.params.id);

     if(!product){
          return next(new ErrorHander("Product not found",404));
     }

     res.status(200).json({
          success:true,
          product
     })
})

// Update Product

exports.updateProduct = catchAsyncError(async (req,res,next)=>{
      
     let product =await Product.findById(req.params.id);

     if(!product){
          return next(new ErrorHander("Product not found",404));
     }

      product = await Product.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
          runValidators:true,
          useFindAndModify:false
      })

      res.status(200).json({
          success:true,
          product
      })
});


// Delete Product

exports.deleteProduct = catchAsyncError(async (req,res,next)=>{
      
     const product = await Product.findById(req.params.id);

     if(!product){
          return next(new ErrorHander("Product not found",404));
     }

     await Product.remove();

     res.status(200).json({
          success:true,
          message:"Product deleted successfully"
     })
})