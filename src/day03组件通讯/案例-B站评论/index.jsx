import { Component } from 'react'
import './index.css'
import Tab from './componets/tab'
import Form from './componets/form'
import List from './componets//list'
class App extends Component {
  state = {
    // textarea评论
    textarea: '',
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot',
      },
      {
        id: 2,
        name: '时间',
        type: 'time',
      },
    ],
    active: 'hot',
    list: [
      {
        id: 1,
        author: '刘德华',
        comment: '给我一杯忘情水',
        time: new Date('2021-10-10 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1,
      },
      {
        id: 2,
        author: '周杰伦',
        comment: '哎哟，不错哦',
        time: new Date('2021-10-11 09:09:01'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0,
      },
      {
        id: 3,
        author: '五月天',
        comment: '不打扰，是我的温柔',
        time: new Date('2021-10-11 10:09:02'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1,
      },
    ],
  }
  // 评论同步
  changeText = (e) => {
    this.setState({
      textarea: e.target.value,
    })
  }
  // 发表评论
  pushText = () => {
    if (this.state.textarea === '') {
      window.alert('发表内容不能为空')
      return
    }
    const newList = this.state.list
    const len = this.state.list[this.state.list.length - 1].id
    newList.push({
      id: len + 1,
      author: '周杰伦',
      comment: this.state.textarea,
      time: new Date(),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0,
    })
    this.setState({
      list: newList,
      textarea: '',
    })
  }

  // 删除功能
  del = (id) => {
    this.state.list.forEach((item, index) => {
      if (item.id === id) {
        this.state.list.splice(index, 1)
      }
    })
    const newList = this.state.list
    this.setState({
      list: newList,
    })
  }

  // 改变点赞态度
  changeAtt = (att, id) => {
    this.state.list.forEach((item, index) => {
      if (item.id === id) {
        if (item.attitude === att) {
          item.attitude = 0
        } else {
          item.attitude = att
        }
      }
    })
    const newList = this.state.list
    this.setState({
      list: newList,
    })
    // if
  }
  /**
   *
   * @param {*} type
   */
  changeTab = (type) => {
    // console.log(e)
    this.setState({
      active: type,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>5 评论</span>
          </div>
          <Tab
            changeTab={this.changeTab}
            tabs={this.state.tabs}
            active={this.state.active}
          />
          <Form
            changeText={(e) => {
              this.changeText(e)
            }}
            textarea={this.state.textarea}
            pushText={this.pushText}
          />
          <List
            changeAtt={(att, id) => {
              this.changeAtt(att, id)
            }}
            del={(id) => {
              this.del(id)
            }}
            list={this.state.list}
          />
        </div>
      </div>
    )
  }
}
export default App
