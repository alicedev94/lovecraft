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
<body class="diagonal-stripes min-h-screen">
    <div class="flex flex-col items-center justify-center mt-20 gap-4"  id="app">
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">{{ serverData.title }}</h1>
            <p class="text-gray-500 font-mono">{{ serverData.description }}</p>
        </div>
        <div class="counter">
            <div class="flex flex-col items-center bg-white p-4 gap-2 rounded-md  justify-center shadow-lg">
                <p class="font-semibold text-gray-400 text-4xl">{{ count }}</p>
                <button class="bg-transparent hover:cursor-pointer   text-gray-400 border border-gray-400 border-3  rounded-md p-1  uppercase font-semibold rounded-md" @click="increment">one up</button>
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
