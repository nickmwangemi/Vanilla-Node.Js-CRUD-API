const http = require('http')
const products = require('./data/products.json')
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('./controllers/productsController');


const server = http.createServer((req, res) => {
    // Retrieve All Products
    if (req.url === '/api/v1/products' && req.method === 'GET') {
        getProducts(req, res)
    }
    // Retrieve One Product
    else if (req.url.match(/\api\/v1\/products\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[4]
        getProduct(req, res, id)
    }
    // Create A Product
    else if (req.url === '/api/v1/products' && req.method === 'POST') {
        createProduct(req, res)
    }
    // Update Product
    else if (req.url.match(/\api\/v1\/products\/([0-9]+)/) && req.method === 'PUT') {
        const id = req.url.split('/')[4]
        updateProduct(req, res, id)
    }
    // Delete Product
    else if (req.url.match(/\api\/v1\/products\/([0-9]+)/) && req.method === 'DELETE') {
        const id = req.url.split('/')[4]
        deleteProduct(req, res, id)
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))