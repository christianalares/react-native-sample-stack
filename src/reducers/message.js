import { handleActions } from 'redux-actions'

export default handleActions({
    SET_MESSAGE: (state, action) => {
        return ({
            ...state,
            message: action.payload
        })
    }
}, {
    message: 'Default message'
})