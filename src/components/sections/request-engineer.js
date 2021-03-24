import React from "react";

export default class RequestEngineer extends React.Component {
    render() {
        const {className} = this.props;
        return (
            <form className={`form ${className}`} action="#">
                <h2>Запишитесь сегодня на <br/><span>бесплатный замер</span></h2>
                <input className="form-control form_input" name="user_name" required type="text"
                       placeholder="Введите ваше имя"/>
                <input className="form-control form_input" name="user_phone" required type="text"
                       placeholder="Введите телефон"/>
                <button className="text-uppercase btn-block button" name="submit"
                        type="submit">Вызвать замерщика!
                </button>
                <p className="form_notice">Ваши данные конфиденциальны</p>
            </form>
        );
    }


}