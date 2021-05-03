export const customError = (error, setLoading) => {
  console.log('1', error.message)
  console.log('2', error.response)
  if (
    error.message === 'Network Error' ||
    typeof error.response === 'undefined'
  ) {
    console.log('Server Error, try again later')
    setLoading(false)
    return
  }
  setLoading(false)
}
