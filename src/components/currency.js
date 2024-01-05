import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency} = useContext(AppContext);
        const changeCurrency = (val) =>{
            currency(val)
        }

    

    return (
        <div >
            <select className="btn btn-success" id="currency" onChange={(event) => changeCurrency(event.target.value)}>
            <option value="£">£ Pound</option>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Rupee</option>
                  </select>
        </div>
    );
    };

export default Currency;
