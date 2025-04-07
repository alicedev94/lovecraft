/**
 * Sample data object containing user information
 * @type {Object}
 */
const data = {
    name: "Alice",
    age: 24,
    city: "Valencia"
}

/**
 * Template generator function that returns an object with a custom template format
 * @returns {Object} Object containing the template string
 */
const renderTemplate = () => ({
    kk: `
        h1 -> ${data.name}
        p -> Edad: ${data.age}
        p -> Ciudad: ${data.city}
        a -> href: https://www.google.com
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
    `
})

/**
 * Regular expression to match HTML-like syntax in our custom format
 * Matches: tag -> content
 * @type {RegExp}
 */
const regex = /(\w+)\s*->\s*(.+)/g

/**
 * Converts our custom template format to valid HTML
 * @param {Object} template - Template object containing the custom format
 * @returns {string} Valid HTML string
 */
const engineView = (template) => {
    const html = template.kk
        .split("\n")                    // Split by newlines
        .map(line => line.trim())       // Remove leading/trailing whitespace
        .filter(line => line !== "")    // Remove empty lines
        .map(line =>
            line.replace(regex, "<$1>$2</$1>")  // Convert to HTML tags
        )
        .join("\n")                     // Join back into a single string

    return html
}

// Generate and log the final HTML
const result = engineView(renderTemplate())
//console.log(result)

