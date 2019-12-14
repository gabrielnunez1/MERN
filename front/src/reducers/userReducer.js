const userReducer = (state=[], action)=>{
    switch(action.type){
        case 'ADD_PROD':
            return[
                // Desarma el array y lo junta
                ...state,
                {
                    country: action.payload.country,
                    user: action.payload.user
                }
            ]
            case'GET_PROD':
                return action.payload
            default:
                return state

    }
}

export default userReducer