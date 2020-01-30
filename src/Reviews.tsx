import React from 'react'
import { useAsync } from 'react-use'

import { getReviews } from './review.service'
import { ReviewsTable } from './ReviewsTable'

export default function Reviews() {
  const { loading, error, value } = useAsync(async () => {
    return await getReviews()
  }, [])

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        value && <ReviewsTable reviews={value} />
      )}
    </div>
  )
}
