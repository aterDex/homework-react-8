import React from "react";

import wallet from '../app/img/payment/wallet.png';
import cred from '../app/img/payment/credit-card.png';
import museum from '../app/img/payment/museum.png';

export default class Payment extends React.Component {
    render() {
        return (
            <section className="payment">
                <div className="container">
                    <div className="section_header payment_header">
                        <h2>Вы можете оплатить наши услуги:</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 wow bounceIn">
                            <div className="payment_item">
                                <div className="payment_img">
                                    <img src={wallet} alt=""/>
                                </div>
                                <h3>Наличными</h3>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 wow bounceIn" data-wow-delay="0.3s">
                            <div className="payment_item">
                                <div className="payment_img">
                                    <img src={cred} alt=""/>
                                </div>
                                <h3>Банковской картой</h3>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 wow bounceIn" data-wow-delay="0.6s">
                            <div className="payment_item">
                                <div className="payment_img">
                                    <img src={museum} alt=""/>
                                </div>
                                <h3>Безналичный расчет</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}