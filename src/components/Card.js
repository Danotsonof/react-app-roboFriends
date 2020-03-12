import React from 'react'
import 'tachyons'
// import './Card.css';

const Card = ({ name, id, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}`} alt="avatar" />
      <h2>
        {name}
      </h2>
      <p>
        {email}
      </p>
    </div>
  );
}

export default Card;
