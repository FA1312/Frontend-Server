import React from 'react';

const data = [
  {
    avatar: '/images/avatar1.jpg',
    name: 'John Smith',
    review: 'Hey, I am a random guy, leave me alone or I am gonna call the police!',
  },
  {
    avatar: '/images/avatar2.jpeg',
    name: 'Darth Vader',
    review: 'Luke, I am your father, thank you for the present you bought on this website',
  },
  {
    avatar: '/images/avatar3.jpeg',
    name: 'Super Sloth',
    review: 'ARGWWWWHHHHARAWAAAAAHHHHHH',
  },
  {
    avatar: '/images/avatar4.jpg',
    name: 'T2',
    review: `I'll be back for more products`,
  },
  {
    avatar: '/images/avatar5.jpeg',
    name: 'Gollum',
    review: 'My precious...is sold here!!!',
  },
  {
    avatar: '/images/avatar6.jpg',
    name: 'Tyler Durden',
    review: 'The first rule of Meraki is to spread the word so everyone knows about the existence of this website',
  },
  {
    avatar: '/images/avatar7.jpg',
    name: 'The Joker',
    review: 'The only sensible way to live in this world is to live without rules or buying Meraki products',
  },
  {
    avatar: '/images/avatar8.jpg',
    name: 'Mariano Rajoy Brey',
    review: 'Cuanto peor mejor para todos y cuanto peor para todos mejor. Mejor para mí el suyo beneficio político.',
  },
];

function Reviews() {
  return (
    <section className="testimonials">
      <h5>Real reviews from real customers</h5>
      <div className="container-testimonials">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="review">
              <div className="client">
                <img src={avatar} />
              </div>
              <h4 className="client-name">{name}</h4>
              <small className="client-review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Reviews;
