import { Component } from 'react'

class Test2 extends Component {
  state = {
    count: 0,
  }
  handleClick = (par) => {
    console.log(par)
    // console.log(123)
    // this.state.count++
    // let one = this.state.count++
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div>
        <h1>事件绑定</h1>
        <hr />0<div>数量：{this.state.count}</div>
        <div>
          <button
            onClick={() => {
              this.handleClick(123)
            }}>
            点击1
          </button>
        </div>
        <hr />
        {/* 另一个按钮 */}
        <div>
          <button
            onClick={(e) => {
              this.handleClick(e)
            }}>
            点击2
          </button>
        </div>
      </div>
    )
  }
}
export default Test2
