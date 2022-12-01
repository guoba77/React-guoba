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
const li = React.createElement('li', null, '香蕉')
const li1 = React.createElement('li', null, '苹果')
const li2 = React.createElement('li', null, '橘子')
const ul = React.createElement('ul', { className: 'list' }, li, li1, li2)
root.render(
  ul
  // one
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
