import { Component } from 'react'
import moment from 'moment'
import avatar from './images/avatar.png'
import './index.css'
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
  // 评论同步
  changeText = (e) => {
    this.setState({
      textarea: e.target.value,
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
  formatTime = (time) => {
    return moment(time).format('YYYY-MM-DD HH:mm:ss')
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
          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {this.state.tabs.map((item) => {
                return (
                  <li
                    onClick={() => {
                      this.changeTab(item.type)
                    }}
                    className={this.state.active === item.type ? 'on' : ''}
                    key={item.id}>
                    按{item.name}排序
                  </li>
                )
              })}
            </ul>
          </div>

          {/* 添加评论 */}
          <div className="comment-send">
            <div className="user-face">
              <img className="user-head" src={'./images/avatar.png'} alt="" />
            </div>
            <div className="textarea-container">
              <textarea
                cols="80"
                rows="5"
                onChange={(e) => {
                  this.changeText(e)
                }}
                value={this.state.textarea}
                placeholder="发条友善的评论"
                className="ipt-txt"
              />
              <button
                className="comment-submit"
                onClick={() => {
                  this.pushText()
                }}>
                发表评论
              </button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {this.state.list.map((item) => {
              return (
                <div key={item.id} className="list-item">
                  <div className="user-face">
                    <img className="user-head" src={avatar} alt="" />
                  </div>
                  <div className="comment">
                    <div className="user">{item.author}</div>
                    <p className="text">{item.comment}</p>
                    <div className="info">
                      <span className="time">{this.formatTime(item.time)}</span>
                      {/* <span className="time">{111}</span> */}
                      {/* <span
                        className={[
                          'like',
                          item.attitude === 1 ? 'liked' : '',
                        ].join(' ')}></span> */}
                      <span
                        onClick={() => {
                          this.changeAtt(1, item.id)
                        }}
                        className={[
                          'like',
                          item.attitude === 1 ? 'liked' : '',
                        ].join(' ')}>
                        <i className="icon" />
                      </span>
                      <span
                        onClick={() => {
                          this.changeAtt(-1, item.id)
                        }}
                        className={[
                          'hate',
                          item.attitude === -1 ? 'hated' : '',
                        ].join(' ')}>
                        <i className="icon" />
                      </span>
                      <span
                        onClick={() => {
                          this.del(item.id)
                        }}
                        className="reply btn-hover">
                        删除
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* <div className="user-face">
              <img className="user-head" src="./images/avatar.png" alt="" />
            </div> */}
            {/* <div className="comment">
              <div className="user">zqran</div>
              <p className="text">前排吃瓜</p>
              <div className="info">
                <span className="time">2021-10-08 09:05:00</span>
                <span className="like liked">
                  <i className="icon" />
                </span>
                <span className="hate hated">+
                  <i className="icon" />
                </span>
                <span className="reply btn-hover">删除</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}
export default App
