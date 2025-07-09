import { addToCart, emptyCart } from "../redux/action";
import { removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.cartData)
  console.warn("Data in main component",data)
  const product = {
    name: "iPhone",
    category: "mobile",
    price: 1000,
    color: "red",
  };
  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          Add To Cart
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(removeFromCart(product));
          }}
        >
          Remove From Cart
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(emptyCart());
          }}
        >
          Empty Cart
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(productList());
          }}
        >
          Product List
        </button>
      </div>
    </div>
  );
}

export default Main;
