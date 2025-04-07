# Proyecto [lovecraft] 🚀

**Objetivo**: Crear un framework full-stack integrado que combine las ventajas de una arquitectura monolítica con herramientas modernas (TypeScript, Tailwind, SSR), eliminando complejidades de configuración.

## 🎯 Metas Principales

1. Entender el funcionamiento interno de compiladores/bundlers (Vite, Webpack, Rollup).
2. Optimizar el desarrollo full-stack unificando frontend/backend.
3. Ofrecer una experiencia "zero-config" con:
    - TypeScript nativo
    - Tailwind integrado
    - SSR personalizable
    - Generación automática de configuraciones para despliegue

## ⚡️ Cómo Funciona

### Arquitectura Híbrida (Monolito Inteligente)

| **Ventajas**                       | **Desventajas Tradicionales**        |
| ---------------------------------- | ------------------------------------ |
| Debugging centralizado de API      | Control de versiones separado        |
| Despliegue unificado (1 puerto)    | Proyectos más pesados                |
| Componentes listos para producción | Problemas de CORS                    |
| Documentación automática           | Configuración compleja de WebSockets |

## 🛠 Roadmap Técnico

### Fase 1: Motor de Plantillas .kk

-   [ ] Crear compilador de `.kk` → HTML  
        _Ejemplo:_

    ```js
    // Implementación básica con regex
    function compileKK(plantilla) {
      return plantilla.replace(/(\w+) -> (.+)/g, '<$1>$2</$1>');
    }

    Implementar SSR en Node.js/Express
    ```

Añadir soporte para TypeScript y Tailwind

Fase 2: CLI Avanzado
Generador de configuraciones para Nginx/HTTPS

Scaffolding de proyectos (CRUDs, auth, API)

Sistema de plugins para WebSockets/GraphQL

Fase 3: Portabilidad
Migrar core a Deno (TypeScript nativo)

Soporte para edge computing (Cloudflare Workers)

💡 Filosofía del Proyecto

// Ejemplo de componente .kk (futura sintaxis)
@componente MiBoton {
<button class="bg-blue-500 text-white p-2 rounded">
{{ props.texto }}
</button>
}

Cómo Contribuir
Clona el repo: git clone [URL]

Instala dependencias: pnpm install

Explora los módulos clave:

/compiler: Motor de plantillas .kk

/cli: Generador de configuraciones

/runtime: Soporte para SSR/Deno

📈 Visión a Largo Plazo
"Quiero revolucionar el desarrollo web unificando lo mejor de ambos mundos, eliminando 90% de los archivos de configuración y haciendo el deploy tan simple como kk deploy --prod" - [Tu nombre]

---

### 🔍 Sugerencias Adicionales:

1. **Añade diagramas de arquitectura** (Mermaid.js):

```mermaid
graph TD
  A[Componente .kk] --> B{Compilador}
  B --> C[SSR Node/Deno]
  B --> D[Frontend estático]
  C --> E[API unificada]


Feature	Next.js	SvelteKit	Este Proyecto
Configuración mínima	❌	✅	✅✅
Full-Stack integrado	✅	✅	✅✅
Deploy en 1 comando	❌	❌	✅

# Comandos objetivo del CLI
kk create mi-proyecto --tailwind --sql
kk add componente MiFormulario --type=form
kk deploy --cloud=aws
```
