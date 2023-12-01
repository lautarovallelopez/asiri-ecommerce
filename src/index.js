require('./global');
const express = require('express');
const app = express();
const dbConnection = require('./config/db');
const PORT = 3000;
const generateId = include('utils/generateId');
const productRoute = require('./routes/product');

app.use(express.json());
app.get('/', (req, res) => {
    res.send('hola mundo: ' + generateId());
});

productRoute(app);

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});