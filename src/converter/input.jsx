import React,{ Fragment } from 'react';
import config from './../../config/config'


 const  Input = (props) => {
    const  onChangeHandler = (e) => {
         props.getCurrencyValue('', e.target.value) 
     }
     
    return <Fragment>
                <div class="input-group">
                    <span class="input-group-addon" 
                            id="basic-addon1"
                        >
                        {config.baseCurrency}
                    </span>
                    <input type="number" 
                        value={props.userInputValue} 
                        class="form-control" 
                        placeholder="1" 
                        aria-describedby="basic-addon1"
                        onChange={onChangeHandler}
                        />
                </div>
        </Fragment>

}

export default Input;