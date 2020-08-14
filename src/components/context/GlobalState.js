import React, {useReducer} from 'react';
import Context from './Context';
import Reducer from './Reducer';
import {SAVE_DATA_USER, ERROR, LOADING, BACK} from './types';

const GlobalState = ({ children }) => {

    const initialState = {
        shippingData: [],
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

    const loadingSpinner = (boolean) => {
        dispatch({
            type: LOADING,
            payload: boolean
        })
    }

    const backHome = () => {
        dispatch({
            type: BACK
        })
    }

    const values = {
        shippingdata: state.shippingData,
        error: state.error,
        loading: state.loading,
        saveDataUser,
        setError,
        loadingSpinner,
        backHome
    }

    return(
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default GlobalState;