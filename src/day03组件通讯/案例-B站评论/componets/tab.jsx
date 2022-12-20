function Tab(props) {
  return (
    <div>
      {/* 排序 */}
      <div className="tabs-order">
        <ul className="sort-container">
          {props.tabs.map((item) => {
            return (
              <li
                onClick={() => {
                  props.changeTab(item.type)
                }}
                className={props.active === item.type ? 'on' : ''}
                key={item.id}>
                按{item.name}排序
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Tab
