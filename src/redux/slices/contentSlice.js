import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "library",
    content: [],
    categories: []
}

const librarySlice = createSlice({
    name: "libraryGames",
    initialState,
    reducers: {
        addToContent: (state, action) => void (
            state.content = action.payload
        ),
        addToCategories: (state, action) => {
            let newCategory = action.payload;
            if (newCategory != null) {
                newCategory.map((element) => {
                    if (!state.categories.includes(element.genre_list)) {
                        state.categories.push(element.genre_list)
                    }
                })
                
            }
            // if (!state.categories.includes(newCategory)) {
            //     state.categories.push(newCategory);
            // }
        }
    }
})

export const { addToContent, addToCategories } = librarySlice.actions;
export default librarySlice.reducer;
