import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    return (
      <ul>
        {associatedReviews.map( review => {
          return <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>
        })}
      </ul>
    );
  }
};

export default Reviews;