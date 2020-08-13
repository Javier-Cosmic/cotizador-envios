import React, {useReducer} from 'react';
import Context from './Context';
import Reducer from './Reducer';
import {SAVE_DATA_USER, ERROR} from './types';

const GlobalState = ({ children }) => {

    const initialState = {
        data: [],
        error: null,
        loading: false
    }

    const [state, dispatch] = useReducer(Reducer, initialState);

    const saveDataUser = (data) => {
        dispatch({
            type: SAVE_DATA_USER,
            payload: data
        })
    }

    const setError = (boolean) => {
        dispatch({
            type: ERROR,
            payload: boolean
        })
    }

    const values = {
        error: state.error,
        saveDataUser,
        setError
    }

    return(
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default GlobalState;