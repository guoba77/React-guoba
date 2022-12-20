import { createRoot } from 'react-dom/client'
// import GuobaFn from './day02/函数组件/index.jsx'
// import MyClass from './day02/类组件/index.jsx'
// import TestState from './day02/类组件/类组件的状态.jsx'
// import Test2 from './day02/类组件/事件绑定'
// import Test3 from './day02/类组件//受控组件.jsx'
// import App from './day02/类组件/非受控组件'
// import App from './day02/案例-b站评论/index.jsx'
// import App from './day03组件通讯/父子通信/index.jsx'
// import App from './day03组件通讯/父子通信/练习.jsx'
// import App from './day03组件通讯/案例-B站评论//index.jsx'
// import App from './day04-组件进阶/children属性/index.jsx'
// import App from './day04-组件进阶/props校验/index.jsx'
import App from './day04-组件进阶/生命周期/生命周期.jsx'
const myBox = (
  <>
    <App />
    {/* <GuobaFn />
    <hr />
    <MyClass />
    <hr />
    <TestState />
    <hr /> */}
    {/* <Test2 />
    <hr />
    <Test3 /> */}
  </>
)
createRoot(document.getElementById('root')).render(myBox)
