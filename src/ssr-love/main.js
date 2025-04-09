const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurar directorio para archivos estáticos
//app.use(express.static(path.join(__dirname, 'ssr-love')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

