export const pokeApi = new axios.create ({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 8000
})

export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/chandler/pokemon',
    timeout: 8000
})