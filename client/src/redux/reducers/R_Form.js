import {POSTDATA,DELDATA,GETDATA,EditData,SHAREDATA} from './../constants/actiontype.js';

const R_Form=(state=[],action)=>{
    switch (action.type) {
        case POSTDATA:
            return {...action.data};
        case DELDATA:
            return state;
        case GETDATA:
            return state;
        case EditData:
            return {...action.data};
        case SHAREDATA:
            return [...action.data];
        default:
            return state;
    }
}
export default R_Form;