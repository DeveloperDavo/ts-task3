import React from 'react'
import { useAsync } from 'react-use'

import { getReviews } from './review.service'

export default function Reviews() {
  const { loading, error, value } = useAsync(async () => {
    return await getReviews()
  }, [])

  console.log(value)
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>Value: {value[0].changeDate}</div>
      )}
    </div>
  )
}
