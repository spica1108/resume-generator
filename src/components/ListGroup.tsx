
function ListGroup() {
  let items = ['后藤一里', '山田凉', '吉他英雄']


  return (
    <>
      <h1>List</h1>
      {/* 当条件为真，返回&后的值，条件为假，返回值为假，不会渲染 */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map(item => (
          <li className="list-group-items" key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup  