import React from 'react';
import Article02 from './Article02';

class Blog02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  componentDidMount() {
    // ボタンがクリックされたらいいねをカウントアップする
    document.getElementById('counter').addEventListener('click', this.countUp)
    // 別の関数の記述方法
    // document.getElementById('counter').addEventListener('click',()=> this.countUp())
    // イベントリスナーの中で this.countUp() と記述するとrenderが何度も呼び出されるため上記で記述する。
  }

  componentDidUpdate() {
    if(this.state.count >= 10) {
      this.setState({count: 0})
    }
  }

  componentWillUnmount() {
    document.getElementById('counter').removeEventListener('click', this.countUp)
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <React.Fragment>
        <Article02
          title={"Reactの使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
      </React.Fragment>
    )
  }
}

export default Blog02
