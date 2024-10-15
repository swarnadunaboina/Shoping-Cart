export function cartUpdate(cartCount){
    return ({type:"add",payload:cartCount})
}
export function addCartItem(Item){
    console.log("action",Item)
    return (
        {type:"cartItem",payload:Item}
    )
}
export function addItemSize(size){
    console.log("actionsize",size)
    return(
        {type:"itemSize",payload:size}
    )
}
export function addQty(cartQty){
    return ({type:"addQty",payload:cartQty})
}
export function minusQty(cartQty){
    return ({type:"minusQty",payload:cartQty})
}