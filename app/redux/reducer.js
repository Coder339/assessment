import React from 'react';
import * as actions from './actiontypes';
// import Appconstant from '../../components/constant/index';

export default reducer = (state = [], action) => {

    console.log('Actions', action)

    switch (action.type) {
    
        case actions.CLEAR_DATA:
            return {
                ...state,
                case: '',
                message: '',

            }
        case actions.ADD_STUDENT:
            return {
                ...state,
                case:action.type,
                students:action.payload
            }
        case actions.UPDATE_STUDENT:
            return {
                ...state,
                case:action.type,
                students:action.payload
            }

        default:
            return {
                ...state,
                case: action.type,
                message: action.message,

            }
    }



}