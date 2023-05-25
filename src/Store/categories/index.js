const initialState = {
  activeCategory: "",
  categories: [
    { name: "Backpacking", display_name: "Backpacking", description: "Things that hold other things" },
    { name: "Climbing", display_name: "Climbing", description: "Ropes and pointy things" },
    { name: "Clothing", display_name: "Clothing", description: "Things that you wear while doing other things" },
    { name: "Sleeping", display_name: "Sleeping", desccription: "Things you need when you're tired" }
  ]
}

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECTED_CATEGORY":
      return {
        ...state,
        activeCategory: action.payload
      }
    default:
      return state;
  }
}

export default categoryReducer;