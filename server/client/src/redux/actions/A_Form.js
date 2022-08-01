import { POSTDATA,DELDATA,GETDATA } from "../constants/actiontype"
import * as api from './../../api/index.js'

export const PostData=(PostData,navigate)=>async (dispatch)=>{
    try {

        const data=await api.apipostdata(PostData)
        console.log("reached actions");
        
        const action={
            type:POSTDATA,
            data:data
        }
        dispatch(action);
        //console.log("finished actions");
    } catch (error) {
        console.log(error);
    }
}


export const DelData=(xid,navigate)=>async (dispatch)=>{
    try {
        
        const a=xid.id;
        const b=xid.user.email;
        const data=await api.apideldata(a,b)
        console.log(data);
        
        const action={
            type:DELDATA,
        }
        dispatch(action);
        //console.log("finished actions");
    } catch (error) {
        console.log(error.response.data);
    }
}
export const GetData=(user,navigate)=>async (dispatch)=>{
    try {
        const data=await api.apigetdata(user)
        console.log(data);
        
        const action={
            type:GETDATA,
        }
        dispatch(action);
        //console.log("finished actions");
    } catch (error) {
        console.log(error.response.data);
    }
}


