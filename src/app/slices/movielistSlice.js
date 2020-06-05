import { createSlice } from "@reduxjs/toolkit";
import dataJson from "../../data.json";

export const initialState = {
  loading: false,
  hasErrors: false,
  movies: [],
};

const movielistSlice = createSlice({
  name: "movielist",
  initialState,
  reducers: {
    getMovies: (state) => {
      state.loading = true;
    },
    getMoviesSuccess: (state, { payload }) => {
      state.movies = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getMoviesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
      console.log(state.movies);
    },
    changeRank: (state, action, id) => {
      //payload
      console.log(action.payload)
      //
      
      const OptionA = state.movies.find(element => element.id === action.payload.combatants[0].id) 
      const OptionB = state.movies.find(element => element.id === action.payload.combatants[1].id)
      const topRank = 1000
      const botRank = 10000
      const rankedMovies = action.payload.rankedMovies
      //removes proxy
      console.log(JSON.stringify(OptionA, undefined, 2))
      console.log(JSON.stringify(OptionB, undefined, 2))

      if (action.payload.option === "A" && OptionA.rank === 0 && OptionB.rank === 0 ) {
        console.log('Option A selected')
        OptionA.rank = topRank
        OptionB.rank = botRank
      }
       else if (action.payload.option === "B" && OptionA.rank === 0 && OptionB.rank === 0) {
        console.log('Option B selected')
        OptionA.rank = botRank
        OptionB.rank = topRank
        
      }
      //Challenger Selected
        else if (action.payload.option === "A"  && OptionA.rank === 0 && OptionB.rank !== 0) {
          console.log('Option A Selected - non initial')
          OptionA.rank = OptionB.rank/2
         

        }
        //incumbent Selected
        else if (action.payload.option === "B"  && OptionA.rank === 0 && OptionB.rank !== 0) {
          console.log('Option B Selected - non initial')
          console.log('incumbent stage test')
          console.log(rankedMovies)
          OptionA.rank = OptionB.rank + (OptionB.rank/2)
        }
      else {
        console.log('ChangeRank input not working as intended')
        
      }
      

      
    },
  },
});

//Actions generated from the slice
export const {
  getMovies,
  getMoviesSuccess,
  getMoviesFailure,
  changeRank,
} = movielistSlice.actions;

// A selector
export const movielistSelector = (state) => state.movies;

// The reducer
export default movielistSlice.reducer;

// function handleErrors(response) {
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return response;
// }

//Async thunk action
export function fetchMovies() {
  return async (dispatch) => {
    dispatch(getMovies());

    try {
      // let response = await fetch("../../datafd.json");
      // handleErrors(response);
      // const data = await response.json();

      dispatch(getMoviesSuccess(dataJson));
    } catch (error) {
      dispatch(getMoviesFailure());
    }
  };
}