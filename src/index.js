const messages = [
    "David",
    "Monica",
    "Elvira",
    "Omar",
    "Gerardo",
    "Scarlett",
    "Orlando",
    "Maria",
    "Pedro",
    "Carolina",
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }