import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
    predictReducer
} from './redux/predictReducers'

const rootReducer = combineReducers({
    predictUpdate: predictReducer
})

const store = configureStore({
    reducer: rootReducer})

export default store