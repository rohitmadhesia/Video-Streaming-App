import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name:"Search",
    initialState:{

    },
    reducers:{
        cacheResults:(state,action) => {
            return {
                    ...state,...action.payload,
                }
            }
        }
    }
)

export const{cacheResults} = SearchSlice.actions
export default SearchSlice.reducer