import React from 'react';
import Article02 from './Article02';

class Blog02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      order: 1
    }
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  render() {
    return (
      <React.Fragment>
        <Article02
          title={"Reactの使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
        />
      </React.Fragment>
    )
  }
}

export default Blog02
