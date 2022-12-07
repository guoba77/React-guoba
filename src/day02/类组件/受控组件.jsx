import { Component } from 'react'

class test3 extends Component {
  state = {
    val: '你好！受控',
  }
  setInputVal = (e) => {}
  render() {
    return (
      <div>
        <h1>受控组件</h1>
        <hr />
        <p>
          <input
            type="text"
            onChange={this.setInputVal}
            value={this.state.val}
          />
        </p>
      </div>
    )
  }
}
export default test3
