export const cartData = (data = [], action) => {
    console.warn("reducer called", action);
    if (action.type === "ADD_tO_CART") {
        console.warn("ADD_TO_CART condition",action)
        return data;
    } else {
        return "no action called";
    }
};
