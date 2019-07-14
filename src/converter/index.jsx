import React, { Component,Fragment } from 'react';
import { getCurrencyValue, saveNewCurrency, removeCurrency } from './../../actions/action.js'
import { connect } from 'react-redux';
import ConvertedCurrencyList from './list.jsx'
import CurrencyDropdown from './currencyDropdown.jsx'
import Input from './Input.jsx'



class Converter extends Component {
    constructor() {
        super();
    }

    componentDidMount () {
        this.props.getCurrencyValue('')
    }
    render() {
        return (
                <Fragment>
                    {this.props.fetching 
                        ?  "Loading" 
                        : <div className = "dIB W100">
                            <h1>Basic Currency Converter (From USD)</h1>
                        <Input {...this.props}/>
                        <ConvertedCurrencyList  {...this.props} />
                        <CurrencyDropdown {...this.props} />
                        </div>
                    } 
                </Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { converter = {} } = state;
    const { fetching,rates,
            currenyList,lastUpdate,
            userInputValue
         } = converter;
    return {
        fetching,
        rates,
        currenyList,
        lastUpdate,
        userInputValue
    }
};

const mapDispatchToProps = dispatch => ({

    getCurrencyValue(payload,inputValue) {
        dispatch(getCurrencyValue(payload,inputValue))
    },
    saveNewCurrency (payload) {
        dispatch(saveNewCurrency(payload))
    },
    removeCurrency (payload) {
        dispatch(removeCurrency(payload))

    }

});




export default connect(mapStateToProps, mapDispatchToProps)(Converter);
