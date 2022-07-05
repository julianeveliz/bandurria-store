import { React, createContext, useState } from "react";

export const DataContext = createContext();

const CartContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setCartTotal] = useState(0);

  const addItem = (item, quantity) => {
    const isStockCorrect = validateOutOfStock(item, quantity);

    if (isStockCorrect) {
      if (isInCart(item)) {
        const oldCart = cart.map((existentItem) => {
          if (existentItem.id === item.id) {
            return {
              ...existentItem,
              price:
                existentItem.basePrice * (quantity + existentItem.quantity),
              quantity: quantity + existentItem.quantity,
            };
          }

          return existentItem;
        });

        setCart(oldCart);
      } else {
        setCart([
          ...cart,
          {
            name: item.name,
            quantity: quantity,
            basePrice: item.price,
            price: item.price * quantity,
            id: item.id,
            img: item.img,
            description: item.description,
          },
        ]);
      }
    }
  };

  const removeItem = (itemId) => {
    const itemToRemove = cart.find(
      (existentItem) => existentItem.id === itemId
    );

    if (itemToRemove) {
      setCart(
        cart.filter((existentItem) => existentItem.id !== itemToRemove.id)
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (item) =>
    cart.find((existentItem) => existentItem.id === item.id);

  const validateOutOfStock = (item, quantity) => {
    const itemInCart = isInCart(item);

    if (itemInCart) {
      const itemInCartQty = itemInCart.quantity;

      if (itemInCartQty + quantity > item.stock) {
        alert(
          `Ya has agregado ${itemInCartQty} ${item.name} al carrito. El stock disponible es ${item.stock}.`
        );
        return false;
      }
    }

    return true;
  };

  return (
    <DataContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clearCart,
        showCart,
        setShowCart,
        total,
        setCartTotal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default CartContext;
