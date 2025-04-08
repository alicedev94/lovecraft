const express = require('express');
const app = express();

const port = 3000;

const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>RSC Vanilla</title>
        </head>
        <body>
            <h1>Bienvenido a RSC Vanilla</h1>
            <p>Esta es una aplicación de servidor Express básica.</p>
        </body>
    </html>
`;

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
