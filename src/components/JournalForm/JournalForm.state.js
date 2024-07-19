export let INITIAL_STATE = {
    isValid: {
        post: true,
        title: true,
        date: true
    },
    values: {
        post: '',
        title: '',
        date: '',
        tag: ''
    },
    isFormReadyToSubmit: false
}

export function formReducer(state, action) {
    switch (action.type) {
        case "CLEAR":
            return { ...state, values: INITIAL_STATE.values, isFormReadyToSubmit: false }
        case "SET_VALUE":
            return { ...state, values: {...state.values, ...action.payload} }
        case "RESET_VALIDITY":
            return { ...state, isValid: INITIAL_STATE.isValid }
        case "SUBMIT": {
            let titleValidity = state.values.title?.trim().length
            let postValidity = state.values.post?.trim().length
            let dateValidity = state.values.date

            return {
                ...state,
                isValid: {
                    post: postValidity,
                    title: titleValidity,
                    date: dateValidity
                },
                isFormReadyToSubmit: titleValidity && postValidity && dateValidity
            }
        }
    }
}