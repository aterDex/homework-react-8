import React from "react";

import balkon01 from '../app/img/modal_calc/balkon/ba_01.png';
import balkon02 from '../app/img/modal_calc/balkon/ba_02.png';
import balkon03 from '../app/img/modal_calc/balkon/ba_03.png';
import balkon04 from '../app/img/modal_calc/balkon/ba_04.png';
import type1 from '../app/img/modal_calc/balkon/type1.png';
import type2 from '../app/img/modal_calc/balkon/type2.png';
import type3 from '../app/img/modal_calc/balkon/type3.png';
import type4 from '../app/img/modal_calc/balkon/type4.png';

export default class Calc extends React.Component {
    render() {
        return (
            <div className="popup_calc" hidden>
                <div className="popup_dialog">
                    <div className="popup_calc_content text-center">
                        <button type="button" className="popup_calc_close"><strong>&times;</strong></button>
                        <h2>Калькулятор</h2>
                        <h3>Выберите форму балкона <br/>и укажите размеры</h3>
                        <div className="balcon_icons">
                    <span className="balcon_icons_img do_image_more">
                      <img src={balkon01} alt="Тип1"/></span>
                            <span className="balcon_icons_img">
                      <img src={balkon02} alt="Тип2"/></span>
                            <span className="balcon_icons_img">
                      <img src={balkon03} alt="Тип3"/></span>
                            <span className="balcon_icons_img">
                      <img src={balkon04} alt="Тип4"/></span>
                        </div>
                        <div className="big_img text-center">
                            <img src={type1} alt="Тип1"/>
                            <img src={type2} alt="Тип2"/>
                            <img src={type3} alt="Тип3"/>
                            <img src={type4} alt="Тип4"/>
                        </div>
                        <input className="form-control" id="width" type="text" placeholder="Ширина" required/>
                        <label htmlFor="width">мм</label>
                        <div className="multiplication"><strong>&times;</strong></div>
                        <input className="form-control" id="height" type="text" placeholder="Высота" required/>
                        <label htmlFor="height">мм</label>
                        <button className="button popup_calc_button">Далее</button>
                    </div>
                </div>
            </div>
        );
    }
}