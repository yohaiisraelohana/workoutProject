import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//assets imports
import backIcon from '../../assets/bodyPartsIcons/backColoredIcon.png';
import shouldersIcon from '../../assets/bodyPartsIcons/shouldersColoredIcon.png';
import chestIcon from '../../assets/bodyPartsIcons/chestIcon.png';
import legsIcon from '../../assets/bodyPartsIcons/legsIcon.png';
import absIcon from '../../assets/bodyPartsIcons/absIcon.png';
import calvesIcon from '../../assets/bodyPartsIcons/calvesIcon.png';
import armIcon from '../../assets/bodyPartsIcons/armIcon.png';
import cardioIcon from '../../assets/bodyPartsIcons/cardioIcon.png';

export const getExercises = createAsyncThunk(
    "exercises/getExercises",
    async (thunkAPI) =>{
      try {
        const response = await axios.get('http://localhost:3000/blogsProject/exercises');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
})
export const getSingleExercises = createAsyncThunk(
  "exercises/getSingleExercises",
  async (payload,thunkAPI) =>{
    try {
      const response = await axios.get(`http://localhost:3000/blogsProject/exercises/${payload}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
})

const initialState = {
    exercises:{
      data:[],
      status:"",
      error:null
    },
    single_exercise:{
      data:[],
      status:"",
      error:null
    },
    muscle_collection : [
        {
          muscle:"Back",
          img: backIcon,
          targets:['lats','levator scapulae','spine','traps','upper back']
        },
        {
          muscle:"Shoulders",
          img: shouldersIcon,
          targets:['delts']     
        },
        {
          muscle:"Chest",
          img: chestIcon,
          targets:['pectorals','serratus anterior']
        },
        {
          muscle:"upper legs",
          img: legsIcon,
          targets:['abductors','adductors','glutes','hamstrings','quads']
        },
        {
          muscle:"waist",
          img: absIcon,
          targets:['abs']
        },
        {
          muscle:"lower legs",
          img: calvesIcon,
          targets:['calves']
        },
        {
          muscle:"upper arms",
          img: armIcon,
          targets:['biceps','forearms','triceps']
        },
        {
          muscle:"Cardio",
          img: cardioIcon,
          targets:['cardiovascular system']
    }],
};

const exercisesSlice = createSlice({
    name:"exercises",
    initialState,
    extraReducers:(builder) => {
      builder
        .addCase(getExercises.pending, (state,action) => {
          state.exercises.status = "loading";
        })
        .addCase(getExercises.fulfilled , (state,action) => {
          state.exercises.data = action.payload;
          state.exercises.status = "succeeded";
        })
        .addCase(getExercises.rejected, (state,action) => {
          state.exercises.error = action.payload.error;
          state.exercises.status = "failed";
        })
        .addCase(getSingleExercises.pending, (state,action) => {
          state.single_exercise.status = "loading";
        })
        .addCase(getSingleExercises.fulfilled , (state,action) => {
          state.single_exercise.data = action.payload;
          state.single_exercise.status = "succeeded";
        })
        .addCase(getSingleExercises.rejected, (state,action) => {
          state.single_exercise.error = action.payload.error;
          state.single_exercise.status = "failed";
        })
    },
    reducers:{
        setExercises: (state,action) => {
            console.log(action);
            state.exercises = action.payload;
        },
        updatePresentedExercise: (state,action) => {
          state.presented_exercise = state.exercises.find((e) => e._id == action.payload);
        }
    }
});

export default exercisesSlice.reducer;

