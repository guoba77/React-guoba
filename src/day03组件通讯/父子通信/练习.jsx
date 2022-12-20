import { Component } from 'react'
import Son from './components/son'
class App extends Component {
  state = {
    money: 1e6,
  }
  changMoney = (a) => {
    this.setState({
      money: a,
    })
  }
  render() {
    return (
      <div>
        <h1>父组件</h1>
        <hr />
        <Son changMoney={this.changMoney} money={this.state.money} />
      </div>
    )
  }
}
export default App
