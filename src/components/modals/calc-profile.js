import React from "react";

import cold from '../app/img/modal_calc/icon_cold.png';
import warm from '../app/img/modal_calc/icon_warm.png';

export default class CalcProfile extends React.Component {
    render() {
        return (
            <div className="popup_calc_profile">
                <div className="popup_dialog">
                    <div className="popup_calc_profile_content text-center">
                        <button type="button" className="popup_calc_profile_close"><strong>&times;</strong></button>
                        <h2>Калькулятор</h2>
                        <h3>Выберите тип остекления <br/>и его профиль</h3>
                        <select className="form-control" name="view" id="view_type">
                            <option value="tree">Деревянное остекление</option>
                            <option value="aluminum">Алюминиевое остекление</option>
                            <option value="plastic">Остекление пластиковыми рамами</option>
                            <option value="french">Панорамное остекление</option>
                            <option value="overhang">Остекление с выносом</option>
                        </select>
                        <img src={cold} alt=""/>
                        <label>
                            <input className="checkbox" type="checkbox" name="checkbox-test"/>
                            <span className="checkbox-custom" id="cold"></span>
                            <span className="label">Холодное</span>
                        </label>
                        <img src={warm} alt=""/>
                        <label>
                            <input className="checkbox" type="checkbox" name="checkbox-test"/>
                            <span className="checkbox-custom" id="warm"></span>
                            <span className="label">Теплое</span>
                        </label>
                        <button className="button popup_calc_profile_button">Далее</button>
                    </div>
                </div>
            </div>
        );
    }
}