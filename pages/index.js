import React from 'react';

import Layout from '../components/Layout/Layout';
import Main from '../components/Main/Main';

import { UnionIcon } from '../components/Icons/Icons';
import { CalendarButton } from '../components/Buttons/Buttons';

const Index = () => {
    return (
        <Layout>
            <Main> 
                <div className="main__content with-calendar">
                    <h2 className="main__title">
                        Health
                    </h2>
                    <h5 className="main__subtitle">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h5>
                    <div className="calendar"><CalendarButton /></div>
                </div>
                <div className="main__content full">
                    <div className="index__wrapper">
                        <div className="index__container">
                            <div className="index__container--half">
                                <div className="index__container">
                                    <div className="index__container--half">
                                        <div className="index__box">
                                            <div className="union">
                                                <UnionIcon />
                                            </div>
                                            <h5 className="heading">
                                                280
                                            </h5>
                                            <p>
                                                Jobs indexed
                                            </p>
                                        </div>
                                    </div>
                                    <div className="index__container--half">
                                        <div className="index__box">
                                            <div className="union">
                                                <UnionIcon />
                                            </div>
                                            <h5 className="heading">
                                                136
                                            </h5>
                                            <p>
                                                Ads published
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="index__container--full">
                                    <div className="index__box">
                                        <div className="union">
                                            <UnionIcon />
                                        </div>
                                        <h5 className="heading">
                                            0
                                        </h5>
                                        <p>
                                            Issues
                                        </p>
                                        <div className="progress-container">
                                            <div className="header">
                                                <p>
                                                    Issue Resolve Rate 
                                                </p>
                                                <span className="percentage">
                                                    100%
                                                </span>
                                            </div>
                                            <div className="progress-holder">
                                                <div className="progress green" style={{ width: '100%'}} />
                                            </div>
                                        </div>
                                        <div className="progress-container">
                                            <div className="header">
                                                <p>
                                                    Issue Rate (Issues per ad published)
                                                </p>
                                                <span className="percentage">
                                                    15%
                                                </span>
                                            </div>
                                            <div className="progress-holder">
                                                <div className="progress blue" style={{ width: '15%'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="index__container--half">
                                <div className="index__container--full">
                                    <div className="index__container--duo">
                                        <div className="index__box">
                                            <div className="union">
                                                <UnionIcon />
                                            </div>
                                            <h5 className="heading">
                                                $3.7 
                                            </h5>
                                            <p>
                                                Ad spend (Total) 
                                            </p>
                                        </div>
                                        <div className="index__box">
                                            <div className="union">
                                                <UnionIcon />
                                            </div>
                                            <h5 className="heading">
                                                $59
                                            </h5>
                                            <p>
                                                Average per Ad published 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="index__container--full">
                                    <div className="index__container">
                                        
                                        <div className="index__container--half">
                                            <div className="index__box circle-progress">
                                                <div className="progress-rounded-container">
                                                    <div className="progress-rounded-holder">
                                                        <div className="c100 p92 big blue">
                                                            <div className="text-container">
                                                                <span className="progress-heading">92%</span>
                                                                <span className="progress-desc">Preview rate</span>
                                                            </div>
                                                            <div className="slice">
                                                                <div className="bar"></div>
                                                                <div className="fill"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="index__container--half">
                                            <div className="index__box circle-progress">
                                                <div className="progress-rounded-container">
                                                    <div className="progress-rounded-holder">
                                                        <div className="c100 p89 big green">
                                                            <div className="text-container">
                                                                <span className="progress-heading">89%</span>
                                                                <span className="progress-desc">Rublish rate</span>
                                                            </div>
                                                            <div className="slice">
                                                                <div className="bar"></div>
                                                                <div className="fill"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export default Index;