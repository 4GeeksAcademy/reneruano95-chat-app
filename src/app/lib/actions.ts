
const url = 'https://sturdy-space-adventure-vqjpvwg66xhj9q-5000.app.github.dev/messages'

export async function getMessage() {

    const response = await fetch(url)
    const data = response.json()

    return data
}

export async function postMessage(messageObj: {}) {
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageObj)
    })
}