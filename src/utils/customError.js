export const customError = (error, setLoading) => {
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
