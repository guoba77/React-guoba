import { Component, createRef } from 'react'
class Son extends Component {
  test = () => {
    console.log(123)
  }
  render() {
    return (
      <div>
        {/*  */}
        <h1>子组件</h1>
      </div>
    )
  }
}
class App extends Component {
  h1 = createRef()
  son = createRef()
  getDom = () => {
    console.log(this.h1)
    console.log(this.son)
    this.son.current.test()
    this.h1.current.style.width = '200px'
    this.h1.current.style.border = '5px solid red'
  }
  render() {
    return (
      <div>
        {/*  */}
        <h1 ref={this.h1}>非受控组件</h1>
        <hr />
        <button onClick={this.getDom}>获取dom</button>
        <hr />
        <Son ref={this.son} />
      </div>
    )
  }
}
export default App
