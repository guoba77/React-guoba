import { Component } from 'react'
// 函数子组件
function Son1(props) {
  console.log('函数子组件接收数据', props)
  // const changeFNum = () => {
  //   props.ChangeNum()
  // }
  return (
    <div>
      <h3>函数子组件</h3>
      <ul>
        <li>{props.count}</li>
        <li>
          <button
            onClick={() => {
              props.ChangeNum(3)
            }}>
            +3
          </button>
        </li>
        <li>{props.h2}</li>
      </ul>
    </div>
  )
}
// 类子组件
class Son2 extends Component {
  render() {
    console.log('类组件接收', this.props)
    return (
      <div>
        <h3>类子组件</h3>
        <ul>
          <li>{this.props.count}</li>
          <li>
            <button
              onClick={() => {
                this.props.ChangeNum(-3)
              }}>
              -3
            </button>
          </li>
          <li></li>
        </ul>
      </div>
    )
  }
}
// export default Son2
/**
 * **props 是只读对象**，也就是说：只能读取对象中的属性，无法修改
 * **单向数据流**，也叫做：自顶而下（自上而下）的数据流
 * 表示：父组件中的数据可以通过 props 传递给子组件，并且，当父组件中的数据更新时，子组件就会自动接收到最新的数据
 * 类比：就像瀑布的水一样只能从上往下流动，并且，当上游的水变浑浊，下游的水也会受到影响
 * 可以传递任意数据（数字  字符串  布尔类型 数组 对象 函数 jsx）
 */
class App extends Component {
  state = {
    count: 0,
    obj: {
      name: '小红',
    },
    h2: <h2>我是一个h2</h2>,
  }
  ChangeNum = (a) => {
    this.setState({
      count: this.state.count + a,
    })
  }
  render() {
    return (
      <div>
        <h1>父组件</h1>
        <hr />
        <Son1
          h2={this.state.h2}
          obj={this.state.obj}
          a="1"
          count={this.state.count}
          ChangeNum={this.ChangeNum}
        />
        <hr />
        <Son2 ChangeNum={this.ChangeNum} count={this.state.count} />
      </div>
    )
  }
}
export default App
