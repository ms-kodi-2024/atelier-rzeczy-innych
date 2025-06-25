export const cartLocalStorageMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  const state = storeAPI.getState();
  const cart = state.cart?.items;

	try {
		localStorage.setItem("cart", JSON.stringify({ items: cart }));
	} catch (_) { }

  return result;
};

export const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (!serializedCart) return undefined;

    const parsed = JSON.parse(serializedCart);

    if (!parsed.items || !Array.isArray(parsed.items)) {
      return undefined;
    }

    return parsed;
  } catch (_) {
    return undefined;
  }
};
