import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

const data = {
    title: 'SSR Love Deno Tailwind',
    description: 'Demo app for Deno, Oak, and Vue',
    count: 0
}

const html = `<!DOCTYPE html>
<html>

<head>
    <title>SSR Love Deno Tailwind</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
    <div class="flex flex-col items-center justify-center mt-20" id="app">
        <h1 class="text-3xl font-bold">{{ serverData.title }}</h1>
        <p>{{ serverData.description }}</p>
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
