import { Component } from 'react'
import Title from './title'
function Son1(props) {
  console.log(props)
  return (
    <div>
      <h3>Son1</h3>
    </div>
  )
}
class Son2 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Son2</h3>
        <div>
          <button onClick={this.props.children}>点击</button>
        </div>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Title>我是表头</Title>
        <h1>Children属性</h1>
        <hr />
        <Son1>
          123
          <h4>hi，插槽</h4>
        </Son1>
        <hr />
        <Son2>
          {() => {
            console.log(123)
          }}
        </Son2>
      </div>
    )
  }
}
export default App
