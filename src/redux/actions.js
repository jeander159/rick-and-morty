export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export const addFavorite = (payload) => ({
    type:ADD_FAVORITE,
    payload:payload
})

export const delFavorite = (id) => ({
    type:DELETE_FAVORITE,
    payload:id
})
