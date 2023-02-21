const { useState } = React;

const GroceryListItem = (props) => {

  const [purchased, canPurchase] = useState(false);
  const [hover, canHover] = useState(false);

  const toggleBold = () => canHover(!hover);

  const style = {
    textDecoration: purchased ? 'line-through' : 'none',
    color: purchased ? 'rebeccapurple' : 'black',
    fontFamily: 'Helvetica, sans-serif',
    fontSize: purchased ? '50px' : '18px',
    fontWeight: hover ? 'bold' : '400',
  };

  return (
    <li style={style} onClick={() => canPurchase(!purchased)} onMouseEnter={toggleBold} onMouseLeave={toggleBold}>{props.item}
    </li>
  );
}

const GroceryList = (props) => (
  <ul>
    {props.groceryListItems.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
);

const App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryListItems={['Eggs', 'Oat milk', 'Cheese', 'Ant trap', 'Inflatable kiddie pool']} />
  </div>
  );


ReactDOM.render(<App />, document.getElementById('app'));