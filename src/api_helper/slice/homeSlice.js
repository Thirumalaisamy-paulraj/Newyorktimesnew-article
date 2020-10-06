import {createSlice} from  '@reduxjs/toolkit';
import { homeApi } from "../server";

export const initialState ={
    datas:[],
    status:""
    
}

export const homeSlice = createSlice({
    name:"Home",
    initialState,
    reducers:{
       datasRequest:(state) =>{
           state.status="Request"
       },
       datasSuccess:(state,{payload})=>{
           state.status="Success"
           state.datas=payload
       },
        datasError:(state)=>{
           state.status="Error"
       }
    }
})

export const {
    datasRequest,datasSuccess,datasError}=homeSlice.actions

const home=homeSlice.reducer;
export default home;
export function pageData(page){
    return dispatch =>{
        dispatch(datasRequest());
        homeApi.search(page).then(
             data => {dispatch(datasSuccess(data))},
             error => {dispatch(datasError(error))}
        )
        
    }
}