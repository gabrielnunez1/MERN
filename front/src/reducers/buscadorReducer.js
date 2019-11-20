const buscadorReducer = (state = "", action) => {
    switch (action.type) {
      case 'UPDATE_BUSCADOR':
        return action.payload
      default:
        return state
    }
  }
  
  export default buscadorReducer