import React from "react";

export default class RequestCall extends React.Component {
    render() {
        return (
            <div className="popup">
                <div className="popup_dialog">
                    <div className="popup_content text-center">
                        <button type="button" className="popup_close"><strong>&times;</strong></button>
                        <div className="popup_form">
                            <form className="form" action="#">
                                <h2>Введите ваши данные <br/>и нажмите заказать звонок</h2>
                                <input className="form-control form_input" name="user_name" required type="text"
                                       placeholder="Введите ваше имя"/>
                                <input className="form-control form_input" name="user_phone" required type="text"
                                       placeholder="Введите телефон"/>
                                <button className="text-uppercase btn-block button" name="submit"
                                        type="submit">Заказать звонок
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