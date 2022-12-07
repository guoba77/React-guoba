import { Component } from 'react'
/**
 * 类组件
 *  使用 ES6 的 class 创建的组件，叫做类（class）组件
 * 约定1：**类名称也必须以大写字母开头**
 *约定2：类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
 *约定3：类组件必须提供 render 方法
 * 约定4：render 方法必须有返回值，表示该组件的 UI 结构
 */
import './index.css'
class MyClass extends Component {
  render() {
    return (
      <div>
        <h1 className="box">我是大美女</h1>
      </div>
    )
  }
}

export default MyClass
