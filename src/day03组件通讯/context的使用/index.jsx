import { Component, createContext } from 'react'
// 1.创建context对象
const { Provider, Consumer } = createContext()
// console.log('context对象', data)
function GrandSon() {
  // 三个数找最大值
  // const getMax = (a, b, c) => {
  //   let max
  //   if (a > b) {
  //     max = a
  //   } else {
  //     max = b
  //   }
  //   if (max < c) {
  //     max = c
  //   }
  //   console.log(max)
  //   return max
  // }
  const getData = (data) => {
    // console.log('爷爷数据', data)
    return (
      <div>
        <h1>{data.num}</h1>
      </div>
    )
  }
  return (
    <div>
      {/* <div>{getMax(6, 11, 3)}</div>,<h5>孙子</h5>
      <hr /> */}
      <div>
        <h5>孙子</h5>
      </div>
      <div>
        <Consumer>{getData}</Consumer>
      </div>
      <hr />
      <div>
        <Consumer>
          {(data) => {
            // console.log('爷爷数据', data)
            return (
              <div>
                <button
                  onClick={() => {
                    data.changeCount(Math.floor(Math.random() * 100))
                  }}>
                  +1
                </button>
              </div>
            )
          }}
        </Consumer>
      </div>
    </div>
  )
}

function Son() {
  return (
    <div>
      <h3>儿子</h3>
      <hr />
      <GrandSon />
    </div>
  )
}

class App extends Component {
  state = {
    count: 0,
  }
  changeCount = (data) => {
    this.setState({
      count: data,
    })
  }
  render() {
    return (
      <Provider
        value={{ changeCount: this.changeCount, num: this.state.count }}>
        <div>
          <h1>父</h1>
          <hr />
          <Son />
        </div>
      </Provider>
    )
  }
}
export default App
