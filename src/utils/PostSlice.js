import {createSlice} from '@reduxjs/toolkit';

const initialState = [
   {userId: 0,
   id: 0,
   title: "",
   body: ""}
];

const postSlice = createSlice({
         name: "posts",
                initialState,
                reducers: {
                    editPost (state, action) { state.editedPost = action.payload},
                    deletePost(state, action) {
                       state.deletedPost = action.payload
                    },
                }
});
export const {editPost, deletePost} = postSlice;
export default postSlice.reducer;
