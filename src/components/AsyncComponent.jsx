import useAsync from '../hooks/useAsync'

export default function AsyncComponent() {
  function myAsyncFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() * 10
        success >= 5 ? resolve('Hi') : reject(new Error('Error'))
      }, 2000)
    })
  }
  const { loading, error, value } = useAsync(myAsyncFunction, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  if (value) return <p>{value}</p>
}
