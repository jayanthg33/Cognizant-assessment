 
import React from 'react';

const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

function BookDetails() {
  return (
    <div className="st2">
      <h2>📚 Book Details</h2>
      {books.map(book => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <p>Price: ₹{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
