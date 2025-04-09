#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net

// deno run main.ts crear

import { Command } from "@cliffy/command";
import { Select, Input, Confirm } from "@cliffy/prompt";
import { colors } from "@cliffy/ansi/colors";

interface CrearOptions {
    template: string;
    nombre?: string;
    framework?: string;
    typescript?: boolean;
    packageManager?: string;
    variant?: string;
}

interface ServirOptions {
    puerto: number;
}

async function promptCrearProyecto(): Promise<CrearOptions> {
    console.log(colors.cyan("\n🚀 ¡Bienvenido al creador de proyectos!"));

    const nombre = await Input.prompt({
        message: colors.yellow("¿Cómo quieres llamar a tu proyecto?"),
        default: "mi-proyecto",
    });

    const framework = await Select.prompt({
        message: colors.yellow("Selecciona un framework:"),
        options: [
            { name: colors.green("⚛️  React"), value: "react" },
            { name: colors.blue("🟢 Vue"), value: "vue" },
            { name: colors.red("🅰️  Angular"), value: "angular" },
        ],
    });

    const typescript = await Confirm.prompt({
        message: colors.yellow("¿Quieres usar TypeScript?"),
        default: true,
    });

    let variant = "";
    if (framework === "react") {
        variant = await Select.prompt({
            message: colors.yellow("Selecciona una variante:"),
            options: [
                { name: colors.cyan("⚡ Vite"), value: "vite" },
                { name: colors.cyan("📦 Create React App"), value: "cra" },
                { name: colors.cyan("🎯 Next.js"), value: "next" },
            ],
        });
    } else if (framework === "vue") {
        variant = await Select.prompt({
            message: colors.yellow("Selecciona una variante:"),
            options: [
                { name: colors.cyan("⚡ Vite"), value: "vite" },
                { name: colors.cyan("🎯 Nuxt.js"), value: "nuxt" },
            ],
        });
    } else if (framework === "angular") {
        variant = await Select.prompt({
            message: colors.yellow("Selecciona una variante:"),
            options: [
                { name: colors.cyan("📦 Angular CLI"), value: "cli" },
                { name: colors.cyan("🎯 Nx"), value: "nx" },
            ],
        });
    }

    const packageManager = await Select.prompt({
        message: colors.yellow("Selecciona un gestor de paquetes:"),
        options: [
            { name: colors.red("📦 npm"), value: "npm" },
            { name: colors.blue("🧶 yarn"), value: "yarn" },
            { name: colors.green("📦 pnpm"), value: "pnpm" },
        ],
    });

    return {
        nombre,
        framework,
        typescript,
        packageManager,
        variant,
        template: "default",
    };
}

const cli = new Command()
    .name("mi-cli")
    .version("1.0.0")
    .description("CLI personalizado construido con Deno")
    .command("crear", "Crear un nuevo proyecto")
    .option("-t, --template <template:string>", "Plantilla a utilizar", { default: "default" })
    .option("-n, --nombre <nombre:string>", "Nombre del proyecto")
    .option("-f, --framework <framework:string>", "Framework a utilizar")
    .option("--typescript", "Usar TypeScript", { default: true })
    .option("-p, --package-manager <packageManager:string>", "Gestor de paquetes")
    .option("-v, --variant <variant:string>", "Variante del framework")
    .action(async (options: CrearOptions) => {
        if (!options.nombre) {
            const respuestas = await promptCrearProyecto();
            options = { ...options, ...respuestas };
        }

        try {
            console.log(colors.cyan("\n📦 Creando tu proyecto..."));
            console.log(colors.yellow("\nConfiguración seleccionada:"));
            console.log(colors.green(`  Nombre: ${options.nombre}`));
            console.log(colors.blue(`  Framework: ${options.framework}`));
            console.log(colors.magenta(`  Variante: ${options.variant}`));
            console.log(colors.cyan(`  TypeScript: ${options.typescript ? "Sí" : "No"}`));
            console.log(colors.yellow(`  Gestor de paquetes: ${options.packageManager}`));

            // Aquí iría la lógica para crear el proyecto
            console.log(colors.green("\n✨ ¡Proyecto creado exitosamente!"));
            console.log(colors.cyan("\nPróximos pasos:"));
            console.log(colors.yellow(`  cd ${options.nombre}`));
            console.log(colors.yellow(`  ${options.packageManager} install`));
            console.log(colors.yellow(`  ${options.packageManager} run dev`));
        } catch (error) {
            console.error(colors.red("Error al crear el proyecto:"), error);
        }
    })
    .command("servir", "Iniciar servidor de desarrollo")
    .option("-p, --puerto <puerto:number>", "Puerto del servidor", { default: 3000 })
    .action(async (options: ServirOptions) => {
        console.log(colors.cyan(`Iniciando servidor en el puerto ${options.puerto}...`));
        // Aquí iría la lógica para iniciar el servidor
    });

if (import.meta.main) {
    await cli.parse(Deno.args);
}