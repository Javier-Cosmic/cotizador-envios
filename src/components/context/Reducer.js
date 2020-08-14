import {SAVE_DATA_USER, LOADING ,ERROR, BACK} from './types';

export default (state, action) => {
    switch (action.type) {

        case SAVE_DATA_USER:
            return{
                shippingData: action.payload
            }

        case LOADING:
            return{
                ...state,
                loading: action.payload
            }

        case ERROR:
            return{
                ...state,
                error: action.payload
            }

        case BACK:
            return{
                shippingData: []
            }
    
        default:
            return state;
    }
}