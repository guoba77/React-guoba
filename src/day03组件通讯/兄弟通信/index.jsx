import { Component } from 'react'
function Bro1() {
  return (
    <div>
      <h3>Bro1</h3>
      <div></div>
    </div>
  )
}
function Bro2() {
  return (
    <div>
      <h3>Bro2</h3>
    </div>
  )
}

class App extends Component {
  state = {
    works: {
      name: '字节',
      money: 15000,
    },
  }
  render() {
    return (
      <div>
        <h1>父组件</h1>
        <hr />
        <Bro1 />
        <hr />
        <Bro2 />
      </div>
    )
  }
}
export default App
