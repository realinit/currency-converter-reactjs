import { 
        SAVE_CURRENCY_DATA, CURRENCY_LIST, 
        REMOVE_CURRENCY ,SAVE_CURRENT_INPUT  
    } from './../constant/actionConstant';
import config from './../config/config'
export const getCurrencyValue = (toCurrency,currentInputValue) => {
    return async dispatch => {
        const url  =  `${config.apiUrl}?base=${config.baseCurrency}&symbols=${toCurrency}`;
        await fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            dispatch({
                type: SAVE_CURRENT_INPUT,
                payload: currentInputValue,
            });
            dispatch({
                type: SAVE_CURRENCY_DATA,
                payload: myJson,
            })
        });
        
    }
}

export const saveNewCurrency = (currency) => {
    return dispatch => {
        dispatch({
            type: CURRENCY_LIST,
            payload: currency,
        })
    }
}
export const removeCurrency = (currency) => {
    return (dispatch,getState) => {
        const { converter = {} } = getState();
        const { currenyList } = converter;
        dispatch({
            type: REMOVE_CURRENCY,
            payload: getFillteredCurrenyList(currenyList,currency)
        })
    }
}

const getFillteredCurrenyList = (currenyList, currency) => {
    if(currency == "ALL"){
        return []
    } else {
        return currenyList.filter(item => item != currency)
    }

}


