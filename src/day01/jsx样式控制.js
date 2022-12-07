import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
const list = [
  { id: 1, name: '樊鸿烨', age: 22 },
  { id: 2, name: '陈清华', age: 22 },
]
/**
 * 1.行内样式
 * 语法：style={{width:'100px'}}
 */
const test1 = (
  <ul style={{ border: '2px solid red', padding: '10px', fontSize: 40 }}>
    <h3>
      {list.map((item) => {
        return (
          <li className='each-li' key={item.id}>
            姓名{item.name},年龄：{item.age}
          </li>
        )
      })}
    </h3>
  </ul>
)
root.render(
  test1
  // test
  // one
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)
