import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

const data = {
    title: 'I develop the framework until it costs $1',
    description: 'DENO, OAK, VUE, TAILWIND',
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
    <div class="flex flex-col items-center justify-center mt-20" id="app">
        <h1 class="text-3xl font-bold">{{ serverData.title }}</h1>
        <p class="text-gray-500 font-mono">{{ serverData.description }}</p>
        <div class="counter">
            <div class="flex flex-col items-center bg-slate-400 p-4 gap-2 rounded-md  justify-center shadow-lg">
                <p class="font-semibold text-white text-4xl">{{ count }}</p>
                <button class="bg-transparent text-white border border-white border-3  rounded-md p-1  uppercase font-semibold rounded-md" @click="increment">one up</button>
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
