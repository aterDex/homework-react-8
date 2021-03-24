import React from "react";

import imgS1 from '../app/img/our_works/1.png';
import imgB1 from '../app/img/our_works/big_img/1.png';

import imgS2 from '../app/img/our_works/2.png';
import imgB2 from '../app/img/our_works/big_img/2.png';

import imgS3 from '../app/img/our_works/3.png';
import imgB3 from '../app/img/our_works/big_img/3.png';

import imgS4 from '../app/img/our_works/4.png';
import imgB4 from '../app/img/our_works/big_img/4.png';

import imgS5 from '../app/img/our_works/5.png';
import imgB5 from '../app/img/our_works/big_img/5.png';

import imgS6 from '../app/img/our_works/6.png';
import imgB6 from '../app/img/our_works/big_img/6.png';

import imgS7 from '../app/img/our_works/7.png';
import imgB7 from '../app/img/our_works/big_img/7.png';

import imgS8 from '../app/img/our_works/8.png';
import imgB8 from '../app/img/our_works/big_img/8.png';

export default class Works extends React.Component {
    render() {
        return (
            <section className="works">

                <div className="container">
                    <div className="section_header">
                        <h2>Наши работы</h2>
                        <div className="section_header_sub"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn"><a
                            href={imgB1}><img className="preview"
                                              src={imgS1}
                                              alt="window"/></a></div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn"
                             data-wow-delay="0.1s"><a href={imgB2}><img className="preview"
                                                                        src={imgS2}
                                                                        alt="window"/></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn"
                             data-wow-delay="0.2s"><a href={imgB3}><img className="preview"
                                                                        src={imgS3}
                                                                        alt="window"/></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn"
                             data-wow-delay="0.3s"><a href={imgB4}><img className="preview"
                                                                        src={imgS4}
                                                                        alt="window"/></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn"
                             data-wow-delay="0.4s"><a href={imgB5}><img className="preview"
                                                                        src={imgS5}
                                                                        alt="window"/></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn"
                             data-wow-delay="0.5s"><a href={imgB6}><img className="preview"
                                                                        src={imgS6}
                                                                        alt="window"/></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn"
                             data-wow-delay="0.6s"><a href={imgB7}><img className="preview"
                                                                        src={imgS7}
                                                                        alt="window"/></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn"
                             data-wow-delay="0.7s"><a href={imgB8}><img className="preview"
                                                                        src={imgS8}
                                                                        alt="window"/></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}