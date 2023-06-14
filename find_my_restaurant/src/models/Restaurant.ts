export default interface IRestaurant {
    id: number
    name: string
    banner_url: string
    logo_url:string
    ratings: {
      overall_rating:number
      star_rating: number
      num_rating: number
    };
    cuisines: string[]
    price_rating: number
    average_price: number
    delivery_fee: number
    delivery_at: string
    location: {
      distance: string
      street: string
      state: string
      zip: number
    };
  }