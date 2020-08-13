import {SAVE_DATA_USER ,ERROR} from './types';

export default (state, action) => {
    switch (action.type) {

        case SAVE_DATA_USER:
            return{
                data: action.payload
            }

        case ERROR:
            return{
                ...state,
                error: action.payload
            }
    
        default:
            return state;
    }
}