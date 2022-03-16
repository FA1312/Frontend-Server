import React from 'react';
import { useEffect, useState } from 'react';
import apiService from '../services/api.service';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';

function Reviews() {
  const [form, setForm] = useState({
    name: '',
    rating: '',
    avatar: '',
    reviewDescription: '',
  });
  const { isLoggedIn } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

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

  const handleForm = e => {
    setForm(previous => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    apiService
      .addReview(form)
      .then(response => {
        window.location.reload(false);
        setReviews(response.data);
      })
      .catch(error => console.log(error));
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
      <div className="addreview">
        <h2>Leave your review</h2>
        <div className="addLabels">
          <form onSubmit={handleSubmit}>
            <label>Your name</label>
            <input type="text" name="name" value={form.name} onChange={handleForm} />
            <label>Upload a picture</label>
            <input type="text" name="avatar" value={form.avatar} onChange={handleForm} />
            <label>Leave your comment</label>
            <input type="text" name="reviewDescription" value={form.reviewDescription} onChange={handleForm} />
            <label>Rating</label>
            <input type="text" name="rating" value={form.rating} onChange={handleForm} />

            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
