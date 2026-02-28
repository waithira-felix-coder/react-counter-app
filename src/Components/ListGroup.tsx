//A component is a function that returns a piece of UI. It is a reusable piece of code that can be used to create a user interface. It is a way to break down a complex UI into smaller, more manageable pieces.
function ListGroup() {

  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  //const
 // items= [];
  
  if (items.length === 0)
    return <p>There are no cities in the list</p>
  
  return (
    <>
      <h1>List of Cities</h1>

    <ul className="list-group">
      {items.map(item => <li className="list-group-item">{item}</li>)}
      </ul>
    </>
  )
}

export default ListGroup;