const { findById } = require('../models/productModel');
const Product = require('../models/productModel');


const { getPostData } = require('../utils/utils');


// @desc   Gets All products
// @route GET api/v1/products
async function getProducts(req, res) {
    try {
        const products = await Product.findAll()

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))

    } catch (error) {
        console.log(error);
    }
}


// @desc   Gets Single product
// @route GET api/v1/product/:id
async function getProduct(req, res, id) {
    try {
        const product = await Product.findById(id)

        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Does Not Exist' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }

    } catch (error) {
        console.log(error);
    }
}


// @desc   Create Product
// @route POST api/v1/products
async function createProduct(req, res) {
    try {
        const body = await getPostData(req)

        const { name, description, price } = JSON.parse(body)

        const product = {
            name,
            description,
            price
        }

        const newProduct = await Product.create(product)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newProduct))
    } catch (error) {
        console.error()
    }
}


// @desc   Update Product
// @route PUT api/v1/products/:id
async function updateProduct(req, res, id) {
    try {
        const productToUpdate = await Product.findById(id)

        if (!productToUpdate) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Does Not Exist' }))
        } else {
            const body = await getPostData(req)
            const { name, description, price } = JSON.parse(body)

            const productData = {
                name: name || product.name,
                description: description || product.description,
                price: price || product.price
            }

            const updatedProduct = await Product.update(id, productData)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updatedProduct))
        }
    } catch (error) {
        console.error()
    }
}


// @desc   Delete Product
// @route DELETE api/v1/products/:id
async function deleteProduct(req, res, id) {
    try {
        const product = await Product.findById(id)

        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Does Not Exist' }))
        } else {
            await Product.remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Product ${id} has been deleted.` }))
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
