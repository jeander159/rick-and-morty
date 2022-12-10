
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from "./actions";
const initialState = {
    myFavorites:[0],
    allCharacters:[]
}
const rootReducer = (state=initialState, action)=>{
    // console.log(state)

    switch(action.type){
        case ADD_FAVORITE:
            // return{
            //     ...state, 
            //     myFavorites:[...state.myFavorites,action.payload]
            // }
            return{
                ...state, 
                allCharacters:[...state.allCharacters,action.payload],
                myFavorites:[...state.allCharacters,action.payload],
                
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites:state.myFavorites.filter((favorite)=>favorite.id!==action.payload)
            }
        
        case FILTER:
            // console.log(action)
            return{
                ...state,
                myFavorites:state.allCharacters.filter((char)=>char.gender===action.payload)
            }
            
        case ORDER:
            // console.log(action.payload)
            return{
                ...state,
                // myFavorites:[...state.allCharacters]
                myFavorites:[...state.allCharacters.sort((a,b)=>{
                    const isReversed = (action.payload==='Ascendente')?1:-1;
                    return isReversed * (a.id-b.id);
                })]
            }
        default:
            return
    }

}
export default rootReducer;