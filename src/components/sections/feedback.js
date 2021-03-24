import React from "react";

export default class Feedback extends React.Component {
    render() {
        return (
            <section className="feedback">
                <div className="container">
                    <div className="feedback_block text-center">
                        <h3>Остались вопросы?</h3>
                        <a className="phone_link" href="/">Спросите у нашего специалиста!</a>
                    </div>
                </div>
            </section>
        );
    }
}