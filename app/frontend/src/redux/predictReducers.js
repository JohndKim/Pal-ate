import {
    PREDICT_FAILURE,
    PREDICT_REQUEST,
    PREDICT_SUCCESS,
} from './predictConstants'

export const predictReducer = (state = { status: {} }, action) => {
    switch (action.type) {
        case PREDICT_REQUEST:
            return { loading: true, ...state}
        
        case PREDICT_SUCCESS:
            return { loading: false, status: action.payload }
        
        case PREDICT_FAILURE:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}