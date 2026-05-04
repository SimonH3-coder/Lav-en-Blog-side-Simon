import { GraphClient} from graphql-request

const endpoint = import.meta.env.VITE.HYGRAPH_ENDPOINT


export const graphClient = new GraphClient(endpoint, {
    headers: {
        'Content-Type': 'application/json',
    }
})