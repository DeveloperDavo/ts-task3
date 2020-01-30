import { Review } from './types'

export async function getReviews(): Promise<Review[]> {
  const response = await fetch(
    'https://api-qa.trustedshops.com/rest/internal/v2/shops/X6A4AACCD2C75E430381B2E1C4CLASSIC/reviews.json'
  )
  const json = await response.json()
  return json.response.data.shop.reviews
}
