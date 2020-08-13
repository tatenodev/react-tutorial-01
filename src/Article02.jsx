import React from 'react';
import LikeButton from './LikeButton';

const Article02 = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態:</label>
      <input
        id="check"
        type="checkbox"
        checked={props.isPublished}
        onClick={() => props.toggle()}>
      </input>
      <LikeButton count={props.count} />
    </div>
  )
};

export default Article02
