import React, { Component } from 'react';

class Review extends Component {

  handleDelete = (e) => {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>
          {review.text}
          <button onClick={this.handleDelete}> X </button>
        </li>
      </div>
    );
  }
};

export default Review;
