import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToCart = async (item, addToCartItem) => {
  let cartItems = await AsyncStorage.getItem("cart");
  cartItems = cartItems ? JSON.parse(cartItems) : [];

  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItemIndex === -1) {
    cartItems.push(item);
    await AsyncStorage.setItem("CART", JSON.stringify(cartItems));
    addToCartItem(item);  
  }
};

export const deleteItem = async (id) => {
  let cartItems = await AsyncStorage.getItem("cart");
  cartItems = cartItems ? JSON.parse(cartItems) : [];

  cartItems = cartItems.filter((item) => item.id !== id);
  await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
};
