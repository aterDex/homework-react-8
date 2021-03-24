import React from "react";

import glazing1 from '../app/img/glazing/icons/1.png';
import glazing2 from '../app/img/glazing/icons/2.png';
import glazing3 from '../app/img/glazing/icons/3.png';
import glazing4 from '../app/img/glazing/icons/4.png';
import glazing5 from '../app/img/glazing/icons/5.png';
import glazingCold from '../app/img/glazing/img_cold.png';
import glazingWarm from '../app/img/glazing/img_warm.png';
import alCold from '../app/img/glazing/aluminum/cold.jpg';
import alWarm from '../app/img/glazing/aluminum/warm.jpg';
import plWarm from '../app/img/glazing/plastic/warm.jpg';
import frPlastic from '../app/img/glazing/french/plastic.jpg';
import frAluminum from '../app/img/glazing/french/aluminum.jpg';
import riAluminum from '../app/img/glazing/rise/aluminum.jpg';
import riTree from '../app/img/glazing/rise/tree.jpg';

export default class Glazing extends React.Component {
    render() {
        return (
            <section className="glazing">
                <div className="container">

                    <div className="section_header">
                        <h2>Остекление балконов и лоджий</h2>
                        <div className="section_header_sub"></div>
                    </div>

                    <div className="glazing_slider">
                        <div className="glazing_block text-center wow fadeInUp">
                            <img src={glazing1} alt="#"/>
                                <a className="tree_link" href="/">Деревянное <br/>остекление</a>
                        </div>
                        <div className="glazing_block text-center wow fadeInUp" data-wow-delay="0.1s">
                            <img src={glazing2} alt="#"/>
                                <a className="aluminum_link" href="/">Алюминиевое <br/>остекление</a>
                        </div>
                        <div className="glazing_block text-center wow fadeInUp" data-wow-delay="0.2s">
                            <img src={glazing3} alt="#"/>
                                <a className="plastic_link" href="/">Остекление <br/>пластиковыми <br/>рамами</a>
                        </div>
                        <div className="glazing_block text-center wow fadeInUp" data-wow-delay="0.3s">
                            <img src={glazing4} alt="#"/>
                                <a className="french_link" href="/">Французское <br/>остекление <br/>(панорамное)</a>
                        </div>
                        <div className="glazing_block text-center wow fadeInUp" data-wow-delay="0.4s">
                            <img src={glazing5} alt="#"/>
                                <a className="rise_link" href="/">Остекление <br/>с выносом</a>
                        </div>
                    </div>


                    <div className="row tree glazing_content">

                        <div className="col-md-6 no-padding">
                            <div className="glazing_cold">
                                <h3>Холодное</h3>
                                <img src={glazingCold} alt="#"/>
                                    <ul>
                                        <li>Конструктивная толщина 42-58 мм</li>
                                        <li>Остекление: полированное стекло (толщиной 4 - 5 мм)</li>
                                        <li>Теплоизоляция: 0,07 м<sup>2</sup> * С/Вт</li>
                                        <li>Звукоизоляция: 20-27 дб</li>
                                    </ul>
                            </div>
                            <div className="glazing_price">
                                <p>2600 руб.кв.м.<br/><span>под ключ с установкой</span></p>
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать
                                    стоимость
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6 no-padding">
                            <div className="glazing_warm">
                                <h3>теплое</h3>
                                <img src={glazingWarm} alt="#"/>
                                    <ul>
                                        <li>Конструктивная толщина профиля: 58-78 м</li>
                                        <li>Остекление: однокамерные и двухкамерные стеклопакеты</li>
                                        <li>Теплоизоляция: 0,63 - 1,05 м<sup>2</sup> * С/Вт</li>
                                        <li>Звукоизоляция: до 5 класса</li>
                                    </ul>
                            </div>
                            <div className="glazing_price">
                                <p>4000 руб.кв.м.<br/><span>под ключ с установкой</span></p>
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать
                                    стоимость
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="row aluminum glazing_content">

                        <div className="col-md-6 no-padding">
                            <div className="glazing_cold">
                                <h3>Холодное</h3>
                                <img src={alCold} alt="#"/>
                                    <ul>
                                        <li>Конструктивная толщина 40-50 мм</li>
                                        <li>Остекление: полированное стекло (толщиной 4 - 5 мм)</li>
                                        <li>Теплоизоляция: 0,07 м<sup>2</sup> * С/Вт</li>
                                        <li>Звукоизоляция: 20-27 дб</li>
                                    </ul>
                            </div>
                            <div className="glazing_price">
                                <p>4000 руб.кв.м.<br/><span>под ключ с установкой</span></p>
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать
                                    стоимость
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6 no-padding">
                            <div className="glazing_warm">
                                <h3>теплое</h3>
                                <img src={alWarm} alt="#"/>
                                    <ul>
                                        <li>Конструктивная толщина профиля: 60-68 м</li>
                                        <li>Остекление: однокамерные и двухкамерные стеклопакеты</li>
                                        <li>Теплоизоляция: 0,63 - 1,05 м<sup>2</sup> * С/Вт</li>
                                        <li>Звукоизоляция: до 5 класса</li>
                                    </ul>
                            </div>
                            <div className="glazing_price">
                                <p>8000 руб.кв.м.<br/><span>под ключ с установкой</span></p>
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать
                                    стоимость
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="row plastic glazing_content">

                        <div className="col-md-6 col-md-offset-3 no-padding">
                            <div className="glazing_warm">
                                <h3>теплое</h3>
                                <img src={plWarm} alt="#"/>
                                    <ul>
                                        <li>Конструктивная толщина профиля: 58-70 м</li>
                                        <li>Остекление: однокамерные и двухкамерные стеклопакеты</li>
                                        <li>Теплоизоляция: 0,63 - 1,05 м<sup>2</sup> * С/Вт</li>
                                        <li>Звукоизоляция: до 5 класса</li>
                                    </ul>
                            </div>
                            <div className="glazing_price">
                                <p>5500 руб.кв.м.<br/><span>под ключ с установкой</span></p>
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать
                                    стоимость
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="row french glazing_content">

                        <div className="col-md-6 no-padding">
                            <div className="glazing_cold">
                                <h3>Пластик</h3>
                                <img src={frPlastic} alt="#"/>
                                    <ul>
                                        <li>Конструктивная толщина 58-70 мм</li>
                                        <li>Остекление: однокамерные и двухкамерные стеклопакеты</li>
                                        <li>Теплоизоляция: 0,63 - 1,05 м<sup>2</sup> * С/Вт</li>
                                        <li>Звукоизоляция: до 5 класса</li>
                                    </ul>
                            </div>
                            <div className="glazing_price">
                                <p>5500 руб.кв.м.<br/><span>под ключ с установкой</span></p>
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать
                                    стоимость
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6 no-padding">
                            <div className="glazing_warm">
                                <h3>Алюминий</h3>
                                <img src={frAluminum} alt="#"/>
                                    <ul>
                                        <li>Конструктивная толщина профиля: 60-68 мм</li>
                                        <li>Остекление: однокамерные и двухкамерные стеклопакеты</li>
                                        <li>Теплоизоляция: 0,63 - 1,05 м<sup>2</sup> * С/Вт</li>
                                        <li>Звукоизоляция: до 5 класса</li>
                                    </ul>
                            </div>
                            <div className="glazing_price">
                                <p>8000 руб.кв.м.<br/><span>под ключ с установкой</span></p>
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать
                                    стоимость
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="row rise glazing_content">

                        <div className="col-md-6 no-padding">
                            <div className="glazing_cold">
                                <h3>Алюминий</h3>
                                <img src={riAluminum} alt="#"/>
                                    <ul>
                                        <li>Конструктивная толщина 40-50 мм</li>
                                        <li>Остекление: полированное стекло (толщиной 4 - 5 мм)</li>
                                        <li>Теплоизоляция: 0,07 м<sup>2</sup> * С/Вт</li>
                                        <li>Звукоизоляция: 20-27 дб</li>
                                    </ul>
                            </div>
                            <div className="glazing_price">
                                <p>4000 руб.кв.м.<br/><span>под ключ с установкой</span></p>
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать
                                    стоимость
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6 no-padding">
                            <div className="glazing_warm">
                                <h3>Дерево</h3>
                                <img src={riTree} alt="#"/>
                                    <ul>
                                        <li>Конструктивная толщина профиля: 40-42 мм</li>
                                        <li>Остекление: полированное стекло (толщиной 4 мм)</li>
                                        <li>Теплоизоляция: 0,07 м<sup>2</sup> * С/Вт</li>
                                        <li>Звукоизоляция: 20-27 дб</li>
                                    </ul>
                            </div>
                            <div className="glazing_price">
                                <p>8000 руб.кв.м.<br/><span>под ключ с установкой</span></p>
                                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать
                                    стоимость
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}