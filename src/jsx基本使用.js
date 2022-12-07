// 到融入react核心依赖
import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App'
// import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
// 使用1root跟实例绘制用户界面
/**
 * 如何创建react的html元素
 */
// React.cloneElement('html元素标签名', { 属性名1: '属性值1' },子元素1,子元素2...)
// const myGuoba = React.createElement('h1', { a: 1, b: 2 }, 'hi,React')
// const one = React.createElement('div', { a: 1, b: 2 }, myGuoba)
// const li = React.createElement('li', null, '香蕉')
// const li1 = React.createElement('li', null, '苹果')
// const li2 = React.createElement('li', null, '橘子')
// const ul = React.createElement('ul', { className: 'list' }, li, li1, li2)


/**
 * jsx只能有一个元素
 */
// const ul =
//   (<ul className='one'>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <hr />
//     <li>
//       <label htmlFor="test">选中</label>
//       <input type="checkbox" id="test" />
//     </li>
//   </ul>)
// const test = <>
//   <p>123</p>
//   <p>456</p>
// </>
/**
 * jsx中的插值表达式（类似vue的胡子语法）
 */
// let one = 123
// let obj = { name: '小明', age: 12 }
// let arr = [1, 2, 3, 4]
// const box = (
//   <ul>
//     <li>{one}</li>
//     <li>{1 + 3}</li>
//     <li>{one < 10 ? '男' : '女'}</li>
//     <li>姓名：{obj.name}</li>
//     <li>年龄：{obj.age}</li>
//     <li></li>
//   </ul>
// )
// 条件渲染
// let isLoad = (load) => {
//   if (load) {
//     return '加载中ing... '
//   } else {
//     return '加载完成'
//   }
// }
// const test = (
//   <div>
//     <h1>{isLoad(false)}</h1>
//     <hr />
//     <div>
//       {false ? <h2> 我是你爹</h2> : <h2> 我是你妈</h2>}
//     </div>
//   </div>
// )

// 列表渲染
const list = [
  { id: 1, name: '樊鸿烨', age: 22 },
  { id: 2, name: '陈清华', age: 22 },
]
// const renderList = () => {
//   const one = []
//   list.forEach((item) => {
//     one.push(<li key={item.id}>姓名{item.name},年龄：{item.age}</li >)
//   })
//   return one
// }
const test1 = (
  <ul>
    <h3>{list.map((item) => {
      return <li key={item.id}>姓名{item.name},年龄：{item.age}</li>
    })}</h3>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
