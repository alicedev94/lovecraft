import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

const data = {
    title: 'Deno, Oak, Vue',
    description: 'Demo app for Deno, Oak, and Vue',
    count: 0
}

const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Deno, Oak, Vue</title>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        </head>
        <body>
            <div id="app">
                <h1>{{ serverData.title }}</h1>
                <p>{{ serverData.description }}</p>
                
                <div class="counter">
                    <p>Counter: {{ count }}</p>
                    <button @click="increment">Increment</button>
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
const router = new Router();
router.get("/", (ctx) => {
    ctx.response.body = html;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 }); 
