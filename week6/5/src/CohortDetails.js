import React from 'react';
import styles from './styles/CohortDetails.module.css';


function CohortDetails({ name, status, duration }) {
  const statusStyle = {
    color: status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={statusStyle}>{name}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{status}</dd>
        <dt>Duration:</dt>
        <dd>{duration}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
