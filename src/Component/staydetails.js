import React from 'react';
import Stays from './stays';

function StayDetails({ match }) {
  const stayName = match.params.name;
  const stay = Stays.find((stay) => stay.name === stayName);

  if (!stay) {
    return <h1>Stay not found</h1>;
  }

  return (
    <div>
      <h1>{stay.name}</h1>
      <p>{stay.type}</p>
      <p>{stay.price}</p>
      <p>{stay.rating} ({stay.reviews})</p>
      {/* Add more details here */}
    </div>
  );
}

export default StayDetails;