import React from "react";
import logo from '../app/img/header/logo.png';
import clock from '../app/img/header/clock.png';
import phone from '../app/img/header/phone.png';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">

                        <div className="col-md-5 col-sm-3 col-xs-12">
                            <div className="logo">
                                <div className="logo_img">
                                    <img src={logo} alt="#"/>
                                </div>
                                <p>Остекление балконов и лоджий в Москве и Московской области</p>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-3 col-xs-12">
                            <div className="header_btn_wrap">
                                <div className="header_btn_wrap_block">
                                    <button className="header_btn text-uppercase text-left popup_engineer_btn">
                                        Вызвать <br/>замерщика
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-3 col-xs-6 text-left">
                            <div className="working_hours">
                                <div className="working_hours_img">
                                    <img src={clock} alt="#"/>
                                </div>
                                <p>без выходных <span>9:00 - 18:00</span></p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-3 col-xs-6">
                            <div className="contact_us">
                                <div className="contact_us_wrap">
                                    <a href="/"><img src={phone} alt="#"/>+7 (495) 646-61-71</a>
                                    <a className="phone_link" href="/">Заказать обратный звонок</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}