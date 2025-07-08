import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
//     // console.warn("reducer called", action);
//     if (action.type === ADD_TO_CART) {
//         console.warn("ADD_TO_CART condition",action)
//         return data;
//     } else {
//         return "no action called";
//     }

switch(action.type){
    case ADD_TO_CART : 
    console.warn("reducer called", action);
        return [action.data,...data]
    default:
        return []
    }
};
