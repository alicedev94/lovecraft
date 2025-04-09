const express = require('express');
const app = express();
const port = 3000;

const data = {
    title: 'RSC Vanilla',
    description: 'Esta es una aplicación de servidor Express básica.',
    count: 0
}

const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>RSC Vanilla</title>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        </head>
        <body>
            <div id="app">
                <h1>{{ serverData.title }}</h1>
                <p>{{ serverData.description }}</p>
                
                <div class="counter">
                    <p>Contador: {{ count }}</p>
                    <button @click="increment">Incrementar</button>
                </div>
            </div>

            <script>
                const { createApp } = Vue;
                
                createApp({
                    data() {
                        return {
                            serverData: ${JSON.stringify(data)},
                            count: ${data.count}
                        }
                    },
                    methods: {
                        increment() {
                            this.count++;
                        }
                    }
                }).mount('#app');
            </script>
        </body>
    </html>
`;

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
