export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addFavorite = (payload) => ({
    type:ADD_FAVORITE,
    payload:payload
})

export const delFavorite = (id) => ({
    type:DELETE_FAVORITE,
    payload:id
})

export const filterCards = (gender) => ({
    type:FILTER,
    payload:gender
})

export const orderCards = (payload) => ({
    type:ORDER,
    payload:payload
})
