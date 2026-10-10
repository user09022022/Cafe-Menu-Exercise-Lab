// Café Menu Board — Module 4 exercise lab
// Name: _Giovan Alarcon________   Student ID: 300394602_____

// The data. Do not change the field names; you may change the values.
const menu = [
  {
    id: 1,
    name: "Espresso",
    description: "A double shot, pulled short",
    price: 3.25,
    vegetarian: true,
    soldOut: false
  },
  {
    id: 2,
    name: "Maple Latte",
    description: "Espresso, steamed milk and maple syrup",
    price: 5.5,
    vegetarian: true,
    soldOut: false
  },
  {
    id: 3,
    name: "Smoked Salmon Bagel",
    description: "Cream cheese, capers and red onion",
    price: 9.75,
    vegetarian: false,
    soldOut: false
  },
  {
    id: 4,
    name: "Butter Croissant",
    description: "Baked fresh every morning",
    price: 3.95,
    vegetarian: true,
    soldOut: true
  },
  {
    id: 5,
    name: "Turkey Club",
    description: "Roast turkey, bacon and tomato on sourdough",
    price: 11.5,
    vegetarian: false,
    soldOut: false
  }
];

// TODO Task 1: MenuHeader component
const MenuHeader = (props) =>{
  return(
    <header>
      <h1>{props.cafeName}</h1>
      <span className="count">Items: {props.itemCount}</span>
    </header>
  )
}

// TODO Task 2-1: PriceTag component
const PriceTag = (props) =>{
  return(
    <span className="price">
      ${props.price.toFixed(2)}
    </span>
  )
}

// TODO Task 2-2: MenuItem component
const MenuItem = (props) =>{
  return( 
    <div className={props.soldOut ? "menu-item is-sold-out" : "menu-item"}>
      <div className="item-text">
        <ItemText 
          name = {props.name}
          description = {props.description}
          vegetarian = {props.vegetarian}
        />
        
                  
      </div>
      {props.soldOut ? (
        <span className="sold-out">SOLD OUT</span>
      ) : (
        <PriceTag price = {props.price} />
      )}     
    </div>
  )
}

// TODO Task 5: ItemText component (returns a fragment)
const ItemText = (props) => {
  return(
    <>
      <span className="item-name">{props.name}</span>
      {props.vegetarian && (
        <span className="badge-veg">VEG</span>
      )}
      <span className="item-desc">{props.description}</span>
    </>
  )

}
// TODO Task 5: Footer component
const Footer = (props) => {
  return(
    <footer>
      {props.available} of {props.total} items available today
    </footer>
  )
}



// TODO Task 1 / 3: App component

const App = (props) =>{
  const available = props.items.filter(item => !item.soldOut).length;
  return(
    <div className="menu">
      <MenuHeader 
        cafeName = "Giovan Café"
        itemCount = {props.items.length}
      />  
      {props.items.map((item) => (
        <MenuItem 
          key = {item.id}
          name = {item.name}
          description = {item.description}
          price = {item.price}
          vegetarian = {item.vegetarian}
          soldOut = {item.soldOut}
        />
      ))}
      <Footer 
        available = {available}
        total = {props.items.length}
      />
           
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// TODO Task 1: render <App /> here, passing the menu array as a prop
root.render(<App items={menu} />)
