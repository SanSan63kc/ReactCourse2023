export let INITIAL_STATE = {
    isValid: {
        post: true,
        title: true,
        date: true
    },
    values: {
        post: undefined,
        title: undefined,
        date: undefined
    },
    isFormReadyToSubmit: false
}

export function formReducer(state, action) {
    switch (action.type) {
        case "RESET_VALIDITY":
            return { ...state, isValid: INITIAL_STATE.isValid }
        case "SUBMIT": {
            let titleValidity = action.payload.title?.trim().length
            let postValidity = action.payload.post?.trim().length
            let dateValidity = action.payload.date

            return {
                values: action.payload,
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