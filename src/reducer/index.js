import { combineReducers} from "@reduxjs/toolkit";
import profileReducer from "../slices/profileSlice"
import cartReducer from "../slices/cartSlice"
// import authReducer from "../slices/authSlice"
import viewCourseReducer from "../slices/viewCourseSlice"
import authReducer from "../slices/authSlice"

import courseReducer from "../slices/courseSlice"
const rootReducer=combineReducers({
    auth:authReducer,
    profile: profileReducer,
    cart:cartReducer,
    course:courseReducer,
    viewCourse:viewCourseReducer,
});

export default rootReducer
    