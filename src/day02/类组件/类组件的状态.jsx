import { Component } from 'react'

class TestState extends Component {
  state = {
    count: 0,
    obj: {
      age: 18,
    },
    list: [1, 2, 3],
  }
  render() {
    return (
      <div>
        <h1>测试类组件</h1>
        <hr />
        <div>数量：{this.state.count}</div>
      </div>
    )
  }
}
export default TestState
