const data = {
    name: "alice",
    age: 24,
    city: "Valencia"
}

const renderTemplate = () => ({
    kk: `
        <h1>${data.name}</h1>
        <p>Edad: ${data.age}</p>
        <p>Ciudad: ${data.city}</p>
    `
})
