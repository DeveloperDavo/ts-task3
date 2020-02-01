import { Review } from './types'

// assume mark can always be parsed as a float
function sortByMarkDescending(): any {
  return (a: Review, b: Review) => parseFloat(b.mark) - parseFloat(a.mark)
}

export async function getReviews(): Promise<Review[]> {
  const response = await fetch(
    'https://api-qa.trustedshops.com/rest/internal/v2/shops/X6A4AACCD2C75E430381B2E1C4CLASSIC/reviews.json'
  )
  const json = await response.json()
  const reviews = json.response.data.shop.reviews
  reviews.sort(sortByMarkDescending())
  return reviews
}
