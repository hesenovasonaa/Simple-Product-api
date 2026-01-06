const express = require('express');
const app = express();
const PORT = 3000;
const products = [
    { id: 1, name: "Laptop", price: 1500, quantity: 5 },
    { id: 2, name: "Mouse", price: 25, quantity: 50 },
    { id: 3, name: "Keyboard", price: 70, quantity: 30 },
    { id: 4, name: "Monitor", price: 300, quantity: 10 },
    { id: 5, name: "Phone", price: 900, quantity: 15 },
    { id: 6, name: "Tablet", price: 600, quantity: 8 },
    { id: 7, name: "Headphones", price: 120, quantity: 20 },
    { id: 8, name: "Charger", price: 40, quantity: 60 },
    { id: 9, name: "USB Cable", price: 15, quantity: 100 },
    { id: 10, name: "Webcam", price: 110, quantity: 12 }
];
app.get('/products', (req, res) => {
    const count = Number(req.query.count);
    const offset = Number(req.query.offset);
    const start = offset || 0;
    const end = count ? start + count : products.length;
    let result = [];
    for (let i = start; i < end && i < products.length; i++) {
        result.push(products[i]);
    }
    res.send(result);
});
app.get('/products/:id', (req, res) => {
    const productId = Number(req.params.id);
    const product = products.find(p => p.id == productId);
    res.send(product);
});
app.listen(PORT, () => {
    console.log(`Server işləyir: http://localhost:${PORT}`);
});
