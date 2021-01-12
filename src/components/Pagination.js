import React from 'react';

const Pagination = props => {
  return (
    <div className="py-3">
      <button onClick={props.prevImages} type="button" className="btn btn-info mr-1">Prev &larr;</button>
      <button onClick={props.nextImages} type="button" className="btn btn-info">Next &rarr;</button>
    </div>
  );
}

export default Pagination;