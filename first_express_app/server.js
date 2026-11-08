import express from 'express';

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

const products = [];

// POST - Create a new product URL: http://localhost:5000/products
app.post("/products", (req, res) => {
    const newProduct = req.body;

    products.push(newProduct);

    res.status(201).json({
        message: "Product created successfully",
        data: newProduct
    });
});


// GET - Read all products
// URL: http://localhost:5000/products
app.get("/products", (req, res) => {
    res.status(200).json({
        message: "Products fetched successfully",
        data: products
    });
});


// GET - Read product by ID URL: http://localhost:5000/products/:id

app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const product = products.find(
        (p) => p.id === productId
    );

    if (product) {
        res.status(200).json({
            message: "Product details fetched successfully",
            data: product
        });
    } else {
        res.status(404).json({
            message: "Product not found"
        });
    }
});


// PUT - Update product by ID URL: http://localhost:5000/products/:id

app.put("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const updateProduct = req.body;

    const productIndex = products.findIndex(
        (prod) => prod.id === productId
    );

    if (productIndex !== -1) {

        products[productIndex] = {
            ...products[productIndex],
            ...updateProduct
        };

        res.status(200).json({
            message: "Product updated successfully",
            data: products[productIndex]
        });

    } else {

        res.status(404).json({
            message: "Product not found"
        });

    }
});



// DELETE - Delete product by ID URL: http://localhost:5000/products/:id
app.delete("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const productIndex = products.findIndex(
        (prod) => prod.id === productId
    );

    if (productIndex !== -1) {

        const deleteProduct =
            products.splice(productIndex, 1)[0];

        res.status(200).json({
            message: "Product deleted successfully",
            data: deleteProduct
        });

    } else {

        res.status(404).json({
            message: "Product not found"
        });

    }
});



app.listen(5000, () => {
    console.log(
        "Server is running at http://localhost:5000"
    );
});