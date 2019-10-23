export const addItemToCart =( cartItems, cartItemToAdd)=>
{
  const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id );
  if(existingCartItem)
  {
      return cartItems.map ( cartItem =>
        cartItem.id === cartItemToAdd.id ?
        {...cartItem, quantity : cartItem.quantity +1 }
        :cartItem
        )
  }
  //Quantity is created here when an item is added for the first ttime
  return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const clearItem =(cartItems,selectedItem) => (
  cartItems.filter((cartItem)=>cartItem.id!== selectedItem.id )
)

export const removeItem =( cartItems, cartItemToRemove)=>
{
  const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToRemove.id );
  if(existingCartItem.quantity===1)
  {
    return cartItems.filter((cartItem)=>cartItem.id!== existingCartItem.id )
  }
  else{
    return cartItems.map ( cartItem =>
      cartItem.id === cartItemToRemove.id ?
      {...cartItem, quantity : cartItem.quantity -1 }
      :cartItem
      )
  }
}