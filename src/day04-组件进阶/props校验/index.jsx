import { Component } from 'react'
import PropTypes from 'prop-types'
Colors.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.element,
  obj: PropTypes.shape({
    a: PropTypes.number,
    b: PropTypes.string,
  }),
}
Colors.defaultProps = {
  a: 1000,
}
function Colors({ list, b }) {
  console.log(list)
  return (
    <div>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                textAlign: 'center',
                lineHeight: '100px',
                width: '100px',
                height: '100px',
                background: item,
                color: '#fff',
                marginBottom: '10px',
                cursor: 'pointer',
              }}>
              {item}
            </li>
          )
        })}
      </ul>
      <hr />
      <div>{b}</div>
    </div>
  )
}
class Cld extends Component {
  static propTypes = {
    a: PropTypes.number,
  }
  render() {
    return <div></div>
  }
}
class App extends Component {
  state = {
    list: ['red', 'blue', 'green', 'pink', 'skyblue'],
    // list: 'red',
    obj: {
      a: 1,
      b: 'abc',
    },
  }
  render() {
    return (
      <div>
        <h1>Props校验</h1>
        <hr />
        <Colors
          obj={this.state.obj}
          b={<h1>hi,jsx!!</h1>}
          a={1}
          list={this.state.list}></Colors>
        <hr />
        <Cld a={1}></Cld>
      </div>
    )
  }
}
export default App
