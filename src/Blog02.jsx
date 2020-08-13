import React from 'react';
import Article02 from './Article02';
// import {Foo, Bar} from './components/FooBar';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge'

// 別名import
// import * as AnotherName from './Article'
// import {Foo as MyFoo} from './FooBar

const Blog02 = () => {

  // componentDidMount() {
  //   // ボタンがクリックされたらいいねをカウントアップする
  //   document.getElementById('counter').addEventListener('click', this.countUp)
  //   // 別の関数の記述方法
  //   // document.getElementById('counter').addEventListener('click',()=> this.countUp())
  //   // イベントリスナーの中で this.countUp() と記述するとrenderが何度も呼び出されるため上記で記述する。
  // }

  // componentDidUpdate() {
  //   if(this.state.count >= 10) {
  //     this.setState({count: 0})
  //   }
  // }

  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // }

  // countUp = () => {
  //   this.setState({count: this.state.count + 1})
  // }

  return (
    <React.Fragment>
      <Article02
        title={"Reactの使い方"}
        // count={this.state.count}
      />
      {/* <Foo /> */}
      {/* <Bar /> */}
      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </React.Fragment>
  )
}

export default Blog02
