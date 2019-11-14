const cityReducer = (state=[], action)=>{
    switch(action.type){
        case 'ADD_PROD':
            return[
                // Desarma el array y lo junta
                ...state,
                {
                    nombre: action.payload.nombre,
                    categoria: action.payload.categoria
                }
            ]
            case 'DELETE_PROD':
                let state2=state.slice();
                return state2.filter((prod)=>{return prod._id!==action.payload});
                // state.map(())
            default:
                return state

    }
}

export default cityReducer