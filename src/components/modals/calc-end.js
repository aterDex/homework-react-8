import React from "react";

export default class CalcEnd extends React.Component {
    render() {
        return (
            <div className="popup_calc_end">
                <div className="popup_dialog">
                    <div className="popup_content text-center">
                        <button type="button" className="popup_calc_end_close"><strong>&times;</strong></button>
                        <div className="popup_form">
                            <form className="form" action="#">
                                <h2>Спасибо за обращение! <br/>Оставьте свои данные</h2>
                                <input className="form-control form_input" name="user_name" required type="text"
                                       placeholder="Введите ваше имя"/>
                                <input className="form-control form_input" name="user_phone" required type="text"
                                       placeholder="Введите телефон"/>
                                <button className="text-uppercase btn-block button" name="submit"
                                        type="submit">Рассчитать стоимость
                                </button>
                                <p className="form_notice">Перезвоним в течение 10 минут</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}