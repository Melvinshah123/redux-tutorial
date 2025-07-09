import { PRODUCT_LIST } from "./constant";

export const productList = () => {
    let data = "hello"
    console.warn("action addToCart",data)
    return {
        type:PRODUCT_LIST,
        data
    }
}