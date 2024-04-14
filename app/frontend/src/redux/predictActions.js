import axios from 'axios'

import {
    PREDICT_FAILURE,
    PREDICT_REQUEST,
    PREDICT_SUCCESS,
} from './predictConstants'

export const predict = (form) => async (dispatch) => {
    try {
        dispatch({
            type: PREDICT_REQUEST
        })

        // returns as json data
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        // send username + password = receive token
        const { data } = await axios.post(
            `/api/predict/`,
            form,
            config
        )
        dispatch({
            type: PREDICT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PREDICT_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}