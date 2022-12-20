function Son(props) {
  // const num = Math.ceil(1.9)
  // const num =
  return (
    <div>
      <h3>儿子组件</h3>
      <p>儿子获得的钱：{props.money}</p>
      <p>
        <button
          onClick={() => {
            props.changMoney(Math.floor(Math.random() * (10 - 3 + 1) + 3) * 1e7)
          }}>
          增加钱
        </button>
      </p>
    </div>
  )
}

export default Son
