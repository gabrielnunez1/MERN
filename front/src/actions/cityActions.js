export const addCity = payload =>({
    type: 'ADD_PROD',
    payload:payload
})

export const deleteCity= payload =>({
    type: 'DELETE_PROD',
    payload:payload
})

function getCity() {
    return (dispatch,getState) => {
      if(getState().length>0) return;
     return fetch('http://localhost:8080/city/').then((res)=>{
        return res.json()
      }).then((data)=>{
        dispatch({
          type:'GET_PROD',
          payload:data
        });
      })
    };
  }
  
  
export {
   getCity
}