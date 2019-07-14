import { SAVE_CURRENCY_DATA, 
        CURRENCY_LIST, 
        REMOVE_CURRENCY,
        SAVE_CURRENT_INPUT 
    } from './../constant/actionConstant';
const defaultSate = {
    fetching:false,
    currenyList:['INR'],
    lastUpdate:'',
    userInputValue:1
}


const converter = (state = defaultSate, action) => {
    switch (action.type) {
        case "FETCHING":
            return {
                ...state,
                fetching:true
            }

        case SAVE_CURRENCY_DATA : 
            return {
                ...state,
                fetching:false,
                rates: {
                    ...state.rates,
                    ...action.payload.rates
                },
                lastUpdate:action.payload.date
            }
        case CURRENCY_LIST : 
            return {
                ...state,
                currenyList:[
                    ...state.currenyList,
                    action.payload
                ]            
            }
        case REMOVE_CURRENCY : 
            return {
                ...state,
                currenyList:action.payload            
            }
        case SAVE_CURRENT_INPUT : 
            return {
                ...state,
                userInputValue:action.payload            
            }
                 
        default:
            return state;
    }
};

export default converter;
