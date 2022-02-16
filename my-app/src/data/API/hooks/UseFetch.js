// import UserMapper from '../mappers/UserMapper'
import { useEffect, useState  } from 'react'

export default function UseFetch (url, mapper) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
            fetch(url)
              .then(res => res.json())
              .then(
                ({ data }) => {
                  setData(mapper(data))
                  setError(null)
                })
              .catch((err) => {
                  console.log(err)
                  setError(err)
              })
              .finally(() => setIsLoaded(true))
      }, [url, mapper])

      return { isLoaded, data, error }
}