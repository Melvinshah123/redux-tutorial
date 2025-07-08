import './App.css';
import {addToCart} from './redux/action'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const product={
    name:'iPhone',
    category:'mobile',
    price: 1000,
    color: 'red'
  }
  return (
    <div className="App">
      <button onClick ={() => { dispatch(addToCart(product))}}>Add To Cart</button>
    </div>
  );
}

export default App;
