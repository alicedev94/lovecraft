import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

const data = {
    // change font
    title: 'I develop the framework until it costs $1',
    description: 'DENO • OAK • VUE • TAILWIND',
    count: 0
}

const html = `<!DOCTYPE html>
<html>

<head>
    <title>SSR Love Deno Tailwind</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        .diagonal-stripes {
            background-image: linear-gradient(45deg, #1a1a2e 25%, #16213e 25%);
            background-color: #0f3460;
            background-blend-mode: overlay;
        }
    </style>
</head>
<body class="min-h-screen diagonal-stripes">
    <div class="flex flex-col items-center justify-center mt-20 gap-4" id="app">
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{{ serverData.title }}</h1>
            <p class="font-mono text-gray-500">{{ serverData.description }}</p>
        </div>
        <div class="counter">
            <div class="flex flex-col items-center justify-center p-4 gap-2 bg-white rounded-md shadow-lg">
                <p class="text-4xl font-semibold text-gray-400">{{ count }}</p>
                <button class="p-1 font-semibold uppercase text-gray-400 bg-transparent border border-gray-400 rounded-md hover:cursor-pointer" @click="increment">one up</button>
            </div>
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
</html>`;
const router = new Router();
router.get("/", (ctx) => {
    ctx.response.body = html;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 80 }); 
