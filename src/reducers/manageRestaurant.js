import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [], reviews: []
}, action) {
  let restaurant;
  let review;

  switch(action.type){
    case "ADD_RESTAURANT":
      restaurant = {
        text: action.text,
        id: cuid()
      }
      return {...state, restaurants: [...state.restaurants, restaurant]}

    case "DELETE_RESTAURANT":
      return { ...state, restaurants: [...state.restaurants.filter(resId => resId.id !== action.id)]}

    case "ADD_REVIEW":
      review = {
        text: action.review.text,
        restaurantId: action.review.restaurantId,
        id: cuid()
      }

      if(state.reviews){
        return {...state, reviews:[...state.reviews, review]}
      } else {
        return { ...state, reviews: [review]}
      }

    case "DELETE_REVIEW":
      return { ...state, reviews: [...state.reviews.filter(reviewId => reviewId.id !== action.id)]}

    default:
      return state
  }
}
