import React from 'react';
import * as actions from "./actiontypes"

export const ClearAction = payload => {
    return { type: actions.CLEAR_DATA, payload }
}

export const AddStudent = payload => {
    return { type: actions.ADD_STUDENT, payload }
}

export const UpdateStudent = payload => {
    return { type: actions.UPDATE_STUDENT, payload }
}
