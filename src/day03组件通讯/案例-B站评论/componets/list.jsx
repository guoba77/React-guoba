import { Component } from 'react'
import avatar from '../images/avatar.png'
import moment from 'moment'
class List extends Component {
  formatTime = (time) => {
    return moment(time).format('YYYY-MM-DD HH:mm:ss')
  }
  render() {
    return (
      <div>
        {/* 评论列表 */}
        <div className="comment-list">
          {this.props.list.map((item) => {
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
                        this.props.changeAtt(1, item.id)
                      }}
                      className={[
                        'like',
                        item.attitude === 1 ? 'liked' : '',
                      ].join(' ')}>
                      <i className="icon" />
                    </span>
                    <span
                      onClick={() => {
                        this.props.changeAtt(-1, item.id)
                      }}
                      className={[
                        'hate',
                        item.attitude === -1 ? 'hated' : '',
                      ].join(' ')}>
                      <i className="icon" />
                    </span>
                    <span
                      onClick={() => {
                        this.props.del(item.id)
                      }}
                      className="reply btn-hover">
                      删除
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default List
