const http = require('http');
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("./dataProvider.js");
// Import the getProducts function

// In-memory array to hold products (initially populated from the JSON file)

let products = getProducts()

function findProductById(id) {
    return products.find(product => product.id === parseInt(id))
}

// Create the server
const server = http.createServer((req, res) => {
    const { method, url } = req
    
    if (method === "GET" && url === "/products") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(products))
    }

    if (method === "GET" && url.startsWith('/products')) {
        id = url.split('/')[2]
        const product = findProductById(id)

        if (product) {
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(product))
        } else {
            res.writeHead(404, {"Content-type":"application/json"})
            res.end(JSON.stringify({message: "Product not found"}))
        }
    }

    if(method ==="POST" && url ==="/products") {
        let body = ""
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.on('end', () => {
            const {name, price} = JSON.parse(body)
            const newProduct = {
                id : products.length ? products[products.length].id + 1 : 1,
                name,
                price
            }
        })
    }
})

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})

// Start the server on port 3000
