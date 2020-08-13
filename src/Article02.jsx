import React, {useState} from 'react';
import LikeButton from './LikeButton';

const Article02 = (props) => {
  const [isPublished, togglePublished] = useState(false);

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態:</label>
      <input
        id="check"
        type="checkbox"
        checked={isPublished}
        onClick={() => togglePublished(!isPublished)}
        >
      </input>
      <LikeButton />
    </div>
  )
};

export default Article02
