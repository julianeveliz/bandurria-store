import { React, createContext, useState } from "react";

export const DataContext = createContext();

const CartContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setCartTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState('');
  const [shippingInformation, setShippingInformation] = useState(null);
  const [paymentInformation, setPaymentInformation] = useState(null);
  const [orderInformation, setOrderInformation] = useState(null);
  const [orderID, setOrderID] = useState(null);
  const [lastOrderID, setLastOrderID] = useState(null);

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

      setMessage(`Se agregó ${item.name} al carrito`);
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
    setQuantity(0);
    setMessage('Se han eliminado todos los productos del carrito');
  };

  const isInCart = (item) =>
    cart.find((existentItem) => existentItem.id === item.id);

  const validateOutOfStock = (item, quantity) => {
    const itemInCart = isInCart(item);

    if (itemInCart) {
      const itemInCartQty = itemInCart.quantity;

      if (itemInCartQty + quantity > item.stock) {
        setMessage(`Ya has agregado ${itemInCartQty} ${item.name} al carrito, el stock disponible es ${item.stock}`);
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
        quantity,
        setQuantity,
        message,
        setMessage,
        shippingInformation,
        setShippingInformation,
        paymentInformation,
        setPaymentInformation,
        orderInformation,
        setOrderInformation,
        orderID,
        setOrderID,
        lastOrderID,
        setLastOrderID,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default CartContext;
