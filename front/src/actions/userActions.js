export const addUser = payload =>({
    type: 'ADD_PROD',
    payload:payload
})

function getUsers() {
    return (dispatch,getState) => {
      if(getState().length>0) return;
     return fetch('http://localhost:8080/user/').then((res)=>{
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
   getUsers
}