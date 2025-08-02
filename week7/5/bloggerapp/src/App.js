import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [show, setShow] = useState('book');

  const renderComponent = () => {
    switch (show) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <BookDetails />;
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>Blogger App 📚📰🎓</h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShow('book')}>Book Details</button>{' '}
        <button onClick={() => setShow('blog')}>Blog Details</button>{' '}
        <button onClick={() => setShow('course')}>Course Details</button>
      </div>
      {renderComponent()}
    </div>
  );
}

export default App;
