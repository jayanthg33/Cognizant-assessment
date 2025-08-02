 
import React from 'react';

const courses = [
  { id: 1, cname: 'React', trainer: 'MaSs React', date: '4/5/2021' },
  { id: 2, cname: 'Angular', trainer: 'Stephen Biz', date: '6/3/2021' },
];

function CourseDetails() {
  return (
    <div className="mystyle1">
      <h2>🎓 Course Details</h2>
      {courses.map(course => (
        <div key={course.id}>
          <h3>{course.cname}</h3>
          <p>Trainer: {course.trainer}</p>
          <p>Date: {course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
