export function getReviews() {
  return fetch(
    'https://api-qa.trustedshops.com/rest/internal/v2/shops/X6A4AACCD2C75E430381B2E1C4CLASSIC/reviews.json'
  )
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.response.data.shop.reviews
    })
}
