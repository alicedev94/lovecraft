const data = {
    name: "alice",
    age: 24,
    city: "Valencia"
}

const renderTemplate = () => ({
    kk: `
        h1 -> ${data.name}
        p -> Edad: ${data.age}
        p-> Ciudad: ${data.city}

        a -> href: https://www.google.com
        

        img -> src: https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png
    `
})

// Expresión regular para transformar el formato
const regex = /(\w+)\s*->\s*(.+)/g;

const engineView = (template) => {
    const html = template.kk
        .split("\n")                    // Dividir por saltos de línea
        .map(line => line.trim())       // Eliminar espacios al inicio/final
        .filter(line => line !== "")    // Quitar líneas vacías
        .map(line =>
            line.replace(regex, "<$1>$2</$1>")  // Aplicar la regex
        )
        .join("\n");                    // Unir todo en un string HTML

    return html
}

const result = engineView(renderTemplate())

