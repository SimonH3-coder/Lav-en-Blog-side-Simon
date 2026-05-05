import {useState, useEffect} from 'react'
import { graphClient } from "../library/graphClient";

import request from 'graphql-request'

export const useGraphQuery = (request) => {
  const [data, setData] = useState('')
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const gqlFetch = async () => {
      try {
        const data = await graphClient.request(request)
        setData(data)
      } catch (error) {
        console.error(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    gqlFetch()
  }, [])

  return { data, error, isLoading }
}