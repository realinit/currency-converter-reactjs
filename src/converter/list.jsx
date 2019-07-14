import React,{Fragment} from 'react';


const ConvertedCurrencyList = (props) => {
    const { currenyList = [] , rates = {} , 
    userInputValue = '1', lastUpdate, removeCurrency 
        } = props;
    return <Fragment>
                <ul className="list-group">
                    {currenyList.map(curreny =>{
                        return <li 
                            key={curreny} 
                            class="list-group-item"
                            >
                           <span className="pull-left">
                                {curreny}
                           </span>
                           <span className="pull-right">
                                {`${Math.ceil(rates[curreny]*userInputValue)} *`}
                           </span> 
                           <span 
                                className="currencyRemoveButton"
                                onClick={e => removeCurrency(curreny)}
                                >
                                {`x`}
                                </span>
                        </li>
                    })}
                </ul>
                {/* Last upadated : {lastUpdate} */}
        </Fragment>
}

export default ConvertedCurrencyList