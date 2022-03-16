import React from 'react';
import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';

function Reviews() {
  const { isLoggedIn } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  //const navigate = useNavigate();
  useEffect(() => {
    apiService
      .getAllReviews()
      .then(response => {
        setReviews(response.data);
        window.scrollTo({ top: 250, left: 0, behavior: 'smooth' });
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = async id => {
    try {
      await apiService.deleteReview(id);
      const response = await apiService.getAllReviews();
      setReviews(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(reviews);
  return (
    <section className="testimonials">
      <h5>Real reviews from real customers</h5>
      <div className="container-testimonials">
        {reviews.map(({ avatar, name, reviewDescription, rating, _id }, index) => {
          return (
            <article key={index} className="review">
              <div className="client">
                <img src={avatar} />
              </div>
              <h4 className="client-name">{name}</h4>
              <small className="client-review">{reviewDescription}</small>
              <p>
                {' '}
                <small>Rating: {rating} / 5 </small>
              </p>
              {isLoggedIn && (
                <>
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      handleDelete(_id);
                    }}
                  >
                    Delete this Review
                  </button>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Reviews;
