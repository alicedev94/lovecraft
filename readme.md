# Project [lovecraft] 🚀

**Objective**: Create an integrated full-stack framework that combines the advantages of a monolithic architecture with modern tools (TypeScript, Tailwind, SSR), eliminating configuration complexities.

## 🎯 Key Goals

1. Understand the inner workings of compilers/bundlers (Vite, Webpack, Rollup).
2. Optimize full-stack development by unifying frontend/backend.
3. Deliver a "zero-config" experience with:
    - Native TypeScript
    - Integrated Tailwind
    - Customizable SSR
    - Automatic deployment configuration generation

## ⚡️ How It Works

### Hybrid Architecture (Smart Monolith)

| **Advantages**              | **Traditional Disadvantages**   |
| --------------------------- | ------------------------------- |
| Centralized API debugging   | Separate version control        |
| Unified deployment (1 port) | Heavier projects                |
| Production-ready components | CORS issues                     |
| Automatic documentation     | Complex WebSocket configuration |

## 🛠 Technical Roadmap

### Phase 1: .kk Template Engine

-   [ ] Create .kk → HTML compiler  
         _Example:_

    ```js
    // Basic regex implementation
    function compileKK(template) {
    	return template.replace(/(\w+) -> (.+)/g, '<$1>$2</$1>');
    }
    ```

-   [ ] Implement SSR in Node.js/Express
-   [ ] Add TypeScript and Tailwind support

### Phase 2: Advanced CLI

-   [ ] Configuration generator for Nginx/HTTPS
-   [ ] Project scaffolding (CRUDs, auth, API)
-   [ ] Plugin system for WebSockets/GraphQL

### Phase 3: Portability

-   [ ] Migrate core to Deno (Native TypeScript)
-   [ ] Edge computing support (Cloudflare Workers)

## 💡 Project Philosophy

```kk
// Example .kk component (future syntax)
@component MyButton {
<button class="bg-blue-500 text-white p-2 rounded">
{{ props.text }}
</button>
}
```
# Add architecture diagrams (Mermaid.js)
graph TD
A[.kk Component] --> B{Compiler}
B --> C[SSR Node/Deno]
B --> D[Static Frontend]
C --> E[Unified API]


Feature	Next.js	SvelteKit	This Project
Minimal Config	❌	✅	✅✅
Full-Stack	✅	✅	✅✅
1-Command Deploy	❌	❌	✅

# Target CLI Commands
kk create my-project --tailwind --sql
kk add component MyForm --type=form
kk deploy --cloud=aws
