import {FETCH_CERVEZAS, FILTRAR_CERVEZAS} from '../actions/index.js'
const initialState = {
    cervezas: [],
    filtrado:[],

}

export default function reducer( state = initialState, action) {

    switch (action.type) {
        case FETCH_CERVEZAS:
            return {
                ...state,
                cervezas: action.payload.data,
                filtrado: action.payload.data
            }
        case FILTRAR_CERVEZAS:
            const allCervezas = state.cervezas
            const filter = allCervezas.filter((el => el.nombre.toLowerCase().includes(action.payload.toLowerCase())))
            return{
                ...state,
                filtrado: filter
            }
        default:
            return state

        
    }

}