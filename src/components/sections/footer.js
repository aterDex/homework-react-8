import React from "react";

import logo from '../app/img/header/logo.png'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-push-8 col-xs-12">
                            <div className="contacts">
                                <a className="phone" href="/">+7 (495) 646-61-71</a>
                                <a className="email" href="/">info@irvasokna.ru</a>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="logo">
                                <img src={logo} alt="#"/>
                            </div>
                        </div>
                        <div className="col-sm-4 col-sm-pull-8 col-xs-12">
                            <div className="copyright">
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}