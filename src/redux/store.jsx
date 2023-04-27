import {configureStore} from '@reduxjs/toolkit'
import exerciseReducer from './features/exercisesSlice';
import usersReducer from './features/usersSlice';

const apiStore = configureStore({
    reducer:{
        exerciseReducer,
        usersReducer,
    }
})

export default apiStore;