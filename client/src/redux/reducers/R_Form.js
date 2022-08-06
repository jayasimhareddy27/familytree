import {POSTDATA,DELDATA,GETDATA} from './../constants/actiontype.js';

const R_Form=(state=[],action)=>{
    switch (action.type) {
        case POSTDATA:
            return {...action.data};
        case DELDATA:
            return state;
        case GETDATA:
            return state;
        default:
            return state;
    }
}
export default R_Form;