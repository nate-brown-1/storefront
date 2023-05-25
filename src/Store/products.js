let initialState = {
  productsInventory: [
    { name: 'Backpack', category: 'Backpacking', description: '65 liter backpack', price: 200, quantity: 100 },
    { name: 'Camelback', category: 'Backpacking', description: '3 liters of water', price: 50, quantity: 100 },
    { name: 'Day Pack', category: 'Backpacking', description: '20 liter day pack', price: 25, quantity: 100 },
    { name: 'Crampons', category: 'Climbing', description: 'Extra sharp crampons', price: 50, quantity: 100 },
    { name: 'Ice Axe', category: 'Climbing', description: 'Extra sharp axe', price: 50, quantity: 100 },
    { name: 'Rope', category: 'Climbing', description: 'Brightly colored rope', price: 25, quantity: 100 },{ name: 'Balaclava', category: 'Clothing', description: 'Fleece balaclava', price: 10, quantity: 100 },
    { name: 'Parka', category: 'Clothing', description: '800 fill down parka', price: 100, quantity: 100 },
    { name: 'Snow Boots', category: 'Clothing', description: 'Insulated snow boots', price: 200, quantity: 100 },
    { name: 'Inflatable Pillow', category: 'Sleeping', description: 'Useless sticky pillow', price: 10, quantity: 100 },
    { name: 'Sleeping Bag', category: 'Sleeping', description: 'Cozy down bag', price: 300, quantity: 100 },
    { name: 'Tent', category: 'Sleeping', description: 'Room for two', price: 100, quantity: 100 }
  ],
  productsToDisplay: [],
}

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECTED_CATEGORY":
      console.log("CATEGORY SELECTED FROM PRODUCT REDUCER: " + action.payload)
      return {
        ...state,
        productsToDisplay: state.productsInventory.filter(product => {
          return product.category.includes(action.payload);
        }),
      }
    default:
      return state;
  }
}

export default productReducer;
