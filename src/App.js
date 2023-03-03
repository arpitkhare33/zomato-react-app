import './App.css';
import './components/FoodCard';
import FoodCard from './components/FoodCard';
let foodItems = [
  {name: 'Mc Veggie Burger', img: 'http://source.unsplash.com/400x200/?burger', desc: 'A patty made of potatoes, peas, carrots, beans, onions, red capsicum and a selection of Indian spices, topped with crispy lettuce, mayonnaise, packed into sesame toasted buns', price: 699, ratings: 4.4, votes: 450},
  {name: 'Veg Extravaganza Pizza', img: 'http://source.unsplash.com/400x200/?pizza', desc: 'A patty made of potatoes, peas, carrots, beans, onions, red capsicum and a selection of Indian spices, topped with crispy lettuce, mayonnaise, packed into sesame toasted buns', price: 699, ratings: 4.4, votes: 450},
  {name: 'Samosa', img: 'http://source.unsplash.com/400x200/?samosa', desc: 'A patty made of potatoes, peas, carrots, beans, onions, red capsicum and a selection of Indian spices, topped with crispy lettuce, mayonnaise, packed into sesame toasted buns', price: 699, ratings: 4.4, votes: 450},
  {name: 'Chinese', img: 'http://source.unsplash.com/400x200/?noodles', desc: 'A patty made of potatoes, peas, carrots, beans, onions, red capsicum and a selection of Indian spices, topped with crispy lettuce, mayonnaise, packed into sesame toasted buns', price: 699, ratings: 4.4, votes: 450}

]
function App() {
  return (
    <div className="food-app-container">
      <h1 className="welcome-title">Welcome to Zomato</h1>
      <div className="food-app-content">
        <FoodCard name = {foodItems[0].name} img = {foodItems[0].img} desc = {foodItems[0].desc} price = {foodItems[0].price} ratings = {foodItems[0].ratings} votes = {foodItems[0].votes} />
        <FoodCard name = {foodItems[1].name} img = {foodItems[1].img} desc = {foodItems[1].desc} price = {foodItems[1].price} ratings = {foodItems[1].ratings} votes = {foodItems[1].votes} />
        <FoodCard name = {foodItems[2].name} img = {foodItems[2].img} desc = {foodItems[2].desc} price = {foodItems[2].price} ratings = {foodItems[2].ratings} votes = {foodItems[2].votes} />
        <FoodCard name = {foodItems[3].name} img = {foodItems[3].img} desc = {foodItems[3].desc} price = {foodItems[3].price} ratings = {foodItems[3].ratings} votes = {foodItems[3].votes} />
      </div>
    </div>
  );
}

export default App;
