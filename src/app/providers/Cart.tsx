import { createContext, useContext, useReducer } from "react";

const CartContext = createContext<Item[]>([]);

const CartDispatchContext = createContext<any>(null);

interface Item {
  id: string;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

function cartReducer(cart: Item[], action: { type: string; id: string }) {
  switch (action.type) {
    case "add": {
      return [
        ...cart,
        {
          id: action.id,
        },
      ];
    }
    case "set": {
      return [...cart];
    }
    case "delete": {
      return cart.filter((t: Item) => t.id !== action.id);
    }
    case "remove": {
      return [];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialCart: Item[] = [];
