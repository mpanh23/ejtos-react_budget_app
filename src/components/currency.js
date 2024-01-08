import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext } from '../context/AppContext';
import 'bootstrap/js/dist/dropdown';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: document.getElementById('inputGroupSelect03').value,
        });
    }

    return (
        <div class="btn-group">
            <select class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="inputGroupSelect03" onChange={changeCurrency}>
            <option defaultValue>Currency (£ Pound)</option>
            <option class="dropdown-item" value="$" name="dollar">$ Dollar</option>
            <option class="dropdown-item" value="£" name="pound">£ Pound</option>
            <option class="dropdown-item" value="€" name="euro">€ Euro</option>
            <option class="dropdown-item" value="₹" name="rupee">₹ Rupee</option>
        </select>
</div>
    );
    };

export default Currency;