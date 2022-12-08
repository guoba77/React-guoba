import { createRoot } from 'react-dom/client'
// import GuobaFn from './day02/函数组件/index.jsx'
// import MyClass from './day02/类组件/index.jsx'
// import TestState from './day02/类组件/类组件的状态.jsx'
// import Test2 from './day02/类组件/事件绑定'
// import Test3 from './day02/类组件//受控组件.jsx'
// import App from './day02/类组件/非受控组件'
import App from './day02/案例-b站评论/index.jsx'
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
