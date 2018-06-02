export const addMessage = (message) => {
console.log(message)
        return {
            type: 'ADD_MESSAGE',
            message
        }
}