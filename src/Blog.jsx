import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = 'wd30gsrc'
    return (
      <React.Fragment>
        <Article
          title={"Reactの使い方"}
          order={1}
          isPublished={true}
          author={authorName}
        />
        <Article
          title={"JSXの使い方"}
          order={2}
          isPublished={true}
          author={"wd30gsrc02"}
        />
        <Article
          title={"環境構築をしてみよう"}
          order={3}
          isPublished={false}
          author={authorName}
        />
      </React.Fragment>
      // <div>
      //   <Article />
      // </div>
    )
  }
}

export default Blog
