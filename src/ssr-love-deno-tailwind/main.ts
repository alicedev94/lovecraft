import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

const data = {
    title: 'I Develop The Framework Until It Costs $1',
    description: 'DENO • OAK • VUE • TAILWIND',
    count: 0
}

const html = `<!DOCTYPE html>
<html>

<head>
    <title>SSR Love Deno Tailwind</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <style>
        title {
            font-family: "Inter", sans-serif;
            font-optical-sizing: auto;
            font-weight: 900;
            font-style: normal;
        }
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
            <h1 class="title text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{{ serverData.title }}</h1>
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
