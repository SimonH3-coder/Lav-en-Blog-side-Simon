import {UseState, useEffect} from 'react'

import request from 'graphql-request'

export const useQuery = (request) => {
    const [data, setData] = UseState(null)
    const [error, setError] = UseState(null)
    const [loading, setLoading] = UseState(false)

    useEffect(() => {
        setLoading(true)
        const gqlFetch = async () => {
            try {
                const data = await  graphClient.request(request)
                setData(data)
            } catch (error) {
                console.error(error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        gqlFetch()
    }, [])

    return {data, error, loading}
}