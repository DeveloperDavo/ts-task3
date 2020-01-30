import React, { useState } from 'react'
import { useAsync } from 'react-use'

import { getReviews } from './review.service'
import { ReviewsTable } from './ReviewsTable'

export default function Reviews() {
  const [toggleHighlightStartingFromRow1] = useState(false)

  const { loading, error, value } = useAsync(async () => {
    return await getReviews()
  }, [])

  return (
    <section>
      {loading ? (
        <>Loading...</>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        value && (
          <ReviewsTable
            reviews={value}
            toggleHighlightStartingFromRow1={toggleHighlightStartingFromRow1}
          />
        )
      )}
    </section>
  )
}
