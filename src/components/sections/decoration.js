import React from "react";

import decoration from '../app/img/decoration/decoration_img.png';
import lining from '../app/img/decoration/material/lining.png';
import plastic from '../app/img/decoration/material/plastic.png';
import pvh from '../app/img/decoration/material/pvh.png';
import laminate from '../app/img/decoration/material/laminate.png';
import tree from '../app/img/decoration/material/tree.png';
import decoration2 from '../app/img/decoration/2/decoration2_img.png';
import metal2 from '../app/img/decoration/2/metal.png';
import plastic2 from '../app/img/decoration/2/plastic.png';
import profnastil2 from '../app/img/decoration/2/profnastil.png';
import tree2 from '../app/img/decoration/2/tree.png';
import vinil2 from '../app/img/decoration/2/vinil.png';
import decoration3 from '../app/img/decoration/3/decoration3_img.jpg';
import aluminum3 from '../app/img/decoration/3/aluminum.png';
import bezram3 from '../app/img/decoration/3/bezram.png';
import pvh3 from '../app/img/decoration/3/pvh.png';
import tree3 from '../app/img/decoration/3/tree.png';
import decoration4 from '../app/img/decoration/4/decoration4_img.png';
import gofrolist4 from '../app/img/decoration/4/gofrolist.png';
import metallocherepitsa4 from '../app/img/decoration/4/metallocherepitsa.png';
import ondulin4 from '../app/img/decoration/4/ondulin.png';
import polikarbonat4 from '../app/img/decoration/4/polikarbonat.png';
import steklopaket4 from '../app/img/decoration/4/steklopaket.png';

export default class Decoration extends React.Component {
    render() {
        return (
            <section className="decoration">
                <div className="container">
                    <div className="section_header">
                        <h2>ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА СО СКИДКОЙ 60%!</h2>
                        <div className="section_header_sub"></div>
                    </div>

                    <div className="decoration_slider">
                        <div className="decoration_item  wow fadeInUp">
                            <div className="internal_link no_click after_click"><a href='/'>Внутренняя отделка</a></div>
                        </div>
                        <div className="decoration_item wow fadeInUp" data-wow-delay="0.1s">
                            <div className="external_link no_click"><a href='/'>Внешняя отделка</a></div>
                        </div>
                        <div className="decoration_item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="rising_link no_click"><a href='/'>Выносное остекление</a></div>
                        </div>
                        <div className="decoration_item wow fadeInUp" data-wow-delay="0.3s">
                            <div className="roof_link no_click"><a href='/'>Крыша на балкон</a></div>
                        </div>
                    </div>

                    <div className="decoration_content">

                        <div className="row">

                            <div className="internal">
                                <div
                                    className="col-lg-3 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 no-padding">
                                    <div className="decoration_img">
                                        <img src={decoration} alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-8 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={lining} alt="#"/>
                                                <h3>Вагонка</h3>
                                                <p>600 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={plastic} alt="#"/>
                                                <h3>Пластиковая вагонка</h3>
                                                <p>750 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={pvh} alt="#"/>
                                                <h3>ПВХ-панели</h3>
                                                <p>800 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={laminate} alt="#"/>
                                                <h3>Настил пола <br/>из ламината</h3>
                                                <p>1250 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={tree} alt="#"/>
                                                <h3>Настил пола <br/>из дерева</h3>
                                                <p>1650 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
                                    <form className="form main_form decoration_form" action="#">
                                        <h2>Запишитесь сегодня на <br/><span>бесплатный замер</span></h2>
                                        <input className="form-control form_input" name="user_name" required type="text"
                                               placeholder="Введите ваше имя"/>
                                        <input className="form-control form_input" name="user_phone" required
                                               type="text" placeholder="Введите телефон"/>
                                        <button className="text-uppercase btn-block button" name="submit"
                                                type="submit">Вызвать замерщика!
                                        </button>
                                        <p className="form_notice">Ваши данные конфиденциальны</p>
                                    </form>
                                </div>
                            </div>
                            <div className="external">
                                <div
                                    className="col-lg-3 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 no-padding">
                                    <div className="decoration_img">
                                        <img src={decoration2} alt=""
                                             style={{marginTop: "3rem"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-8 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={metal2} alt="#"/>
                                                <h3>Металлический <br/>сайдинг</h3>
                                                <p>600 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={plastic2} alt="#"/>
                                                <h3>Пластиковая <br/>вагонка</h3>
                                                <p>750 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={profnastil2} alt="#"/>
                                                <h3>Профнастил</h3>
                                                <p>800 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={tree2} alt="#"/>
                                                <h3>Деревянная <br/>вагонка</h3>
                                                <p>1250 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={vinil2} alt="#"/>
                                                <h3>Виниловый <br/>сайдинг</h3>
                                                <p>1650 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
                                    <form className="form main_form decoration_form" action="#">
                                        <h2>Запишитесь сегодня на <br/><span>бесплатный замер</span></h2>
                                        <input className="form-control form_input" name="user_name" required type="text"
                                               placeholder="Введите ваше имя"/>
                                        <input className="form-control form_input" name="user_phone" required
                                               type="text" placeholder="Введите телефон"/>
                                        <button className="text-uppercase btn-block button" name="submit"
                                                type="submit">Вызвать замерщика!
                                        </button>
                                        <p className="form_notice">Ваши данные конфиденциальны</p>
                                    </form>
                                </div>
                            </div>
                            <div className="rising">
                                <div
                                    className="col-lg-3 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 no-padding">
                                    <div className="decoration_img">
                                        <img src={decoration3} alt=""
                                             style={{marginTop: "3rem"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-8 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={aluminum3} alt="#"/>
                                                <h3>Алюминиевый <br/>профиль</h3>
                                                <p>600 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={bezram3} alt="#"/>
                                                <h3>Безрамное <br/>остекление</h3>
                                                <p>750 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={pvh3} alt="#"/>
                                                <h3>ПВХ <br/>профиль</h3>
                                                <p>800 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={tree3} alt="#"/>
                                                <h3>Деревянный <br/>профиль</h3>
                                                <p>1250 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
                                    <form className="form main_form decoration_form" action="#">
                                        <h2>Запишитесь сегодня на <br/><span>бесплатный замер</span></h2>
                                        <input className="form-control form_input" name="user_name" required type="text"
                                               placeholder="Введите ваше имя"/>
                                        <input className="form-control form_input" name="user_phone" required
                                               type="text" placeholder="Введите телефон"/>
                                        <button className="text-uppercase btn-block button" name="submit"
                                                type="submit">Вызвать замерщика!
                                        </button>
                                        <p className="form_notice">Ваши данные конфиденциальны</p>
                                    </form>
                                </div>
                            </div>

                            <div className="roof">
                                <div
                                    className="col-lg-3 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 no-padding">
                                    <div className="decoration_img">
                                        <img src={decoration4} alt=""
                                             style={{marginTop: "3rem"}}/>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-8 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={gofrolist4} alt="#"/>
                                                <h3>Гофролист</h3>
                                                <p>600 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={metallocherepitsa4} alt="#"/>
                                                <h3>Металлочерепица</h3>
                                                <p>750 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={ondulin4} alt="#"/>
                                                <h3>Ондулин</h3>
                                                <p>800 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={polikarbonat4} alt="#"/>
                                                <h3>Поликарбонат</h3>
                                                <p>1250 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                            <div className="decoration_content_material text-center">
                                                <img src={steklopaket4} alt="#"/>
                                                <h3>Стеклопакет</h3>
                                                <p>1650 руб. кв.м.<span>с материалом</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
                                    <form className="form main_form decoration_form" action="#">
                                        <h2>Запишитесь сегодня на <br/><span>бесплатный замер</span></h2>
                                        <input className="form-control form_input" name="user_name" required type="text"
                                               placeholder="Введите ваше имя"/>
                                        <input className="form-control form_input" name="user_phone" required
                                               type="text" placeholder="Введите телефон"/>
                                        <button className="text-uppercase btn-block button" name="submit"
                                                type="submit">Вызвать замерщика!
                                        </button>
                                        <p className="form_notice">Ваши данные конфиденциальны</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}