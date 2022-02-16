import UserMapper from '../mappers/UserMapper'
import { useEffect, useState  } from 'react'

export default function UseFetch (url) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
            fetch(url)
              .then(res => res.json())
              .then(
                ({ data }) => {
                  setData(UserMapper.convertToUser(data))
                  setError(null)
                })
              .catch((err) => {
                  console.log(err)
                  setError(err)
              })
              .finally(() => setIsLoaded(true))
      }, [url])

      return { isLoaded, data, error }
}