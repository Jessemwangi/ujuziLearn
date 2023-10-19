import { createSlice } from "@reduxjs/toolkit"
import getd from '../../utils/getData'
const initialState = {
    lessonsData:[],
    isLoading:false,
}

export const lessonSlice = createSlice({
    name:'lesson',
    initialState,
    reducers:{
        setLessons: (state,action)=>{
            console.log(action.payload)
                           state.lessonsData = action.payload;

            }
            ,
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        }
    
})

export const { setLessons, setLoading } = lessonSlice.actions;

export const initializeLessons = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
      const lessons = await getd.getAll();
      dispatch(setLessons(lessons));
      dispatch(setLoading(false))
  
    };
  };
  

  export default lessonSlice.reducer;