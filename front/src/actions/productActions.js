export const addProduct = payload =>({
    type: 'ADD_PROD',
    payload:payload
})

export const deleteProduct= payload =>({
    type: 'DELETe_PROD',
    payload:payload
})

export {
    addProduct,
    deleteProduct
}